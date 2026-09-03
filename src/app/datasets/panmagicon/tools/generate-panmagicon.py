"""Deterministically extract the authored Panmagicon canon from its DOCX sources."""
from __future__ import annotations

import json
import re
import sys
import zipfile
from pathlib import Path
from xml.etree import ElementTree as ET

ROOT = Path(__file__).resolve().parents[5]
SOURCE = ROOT / "docs" / "panmagicon"
OUTPUT = Path(__file__).resolve().parents[1] / "generated"
W = "{http://schemas.openxmlformats.org/wordprocessingml/2006/main}"
SHELVES = ["Lessons", "Practical Workings", "Expert Formulae", "Rites", "Wonders"]
ASPECTS = ["fire", "water", "air", "earth", "bloom", "grave", "star", "void"]
SCHOOLS = ["conjuration", "abjuration", "alteration", "restoration", "evocation", "enchantment", "divination", "veiling"]
COLLECTIONS = {
    "Fire Evocation": ("fire-evocation", ["fire"], "evocation", None),
    "Water Restoration": ("water-restoration", ["water"], "restoration", None),
    "Air Divination": ("air-divination", ["air"], "divination", None),
    "Earth Enchantment": ("earth-enchantment", ["earth"], "enchantment", None),
    "Bloom Conjuration": ("bloom-conjuration", ["bloom"], "conjuration", None),
    "Grave Abjuration": ("grave-abjuration", ["grave"], "abjuration", None),
    "Star Alteration": ("star-alteration", ["star"], "alteration", None),
    "Void Veiling": ("void-veiling", ["void"], "veiling", None),
    "Fire + Water: Thermal Exchange": ("fire-water-thermal-exchange", ["fire", "water"], None, "fire-water"),
    "Air + Earth: Resonant Matter": ("air-earth-resonant-matter", ["air", "earth"], None, "air-earth"),
    "Bloom + Grave: The Living Cycle": ("bloom-grave-living-cycle", ["bloom", "grave"], None, "bloom-grave"),
    "Star + Void: The Precipice": ("star-void-precipice", ["star", "void"], None, "star-void"),
}


def paragraphs(path: Path):
    with zipfile.ZipFile(path) as archive:
        root = ET.fromstring(archive.read("word/document.xml"))
    result = []
    for paragraph in root.iter(W + "p"):
        text = "".join(node.text or "" for node in paragraph.iter(W + "t")).strip()
        style = paragraph.find(f"./{W}pPr/{W}pStyle")
        if text:
            result.append((style.get(W + "val") if style is not None else "", text))
    return result


def slug(value: str) -> str:
    value = value.lower().replace("'", "")
    return re.sub(r"[^a-z0-9]+", "-", value).strip("-")


def after(value: str, prefix: str) -> str:
    if not value.startswith(prefix):
        raise ValueError(f"Expected {prefix!r}, received {value!r}")
    return value[len(prefix):].strip()


def extract_spellbooks():
    spells, collections = [], []
    for path in sorted(SOURCE.glob("*Spellbook.docx")):
        paras = paragraphs(path)
        current = None
        shelf = None
        for index, (style, text) in enumerate(paras):
            if style == "Heading1" and text in COLLECTIONS:
                current = text
                shelf = None
                continue
            if current and style == "Heading1":
                current = None
            if not current:
                continue
            if style == "Heading2":
                match = re.match(r"\d+\.\s+(.+)", text)
                shelf = match.group(1) if match and match.group(1) in SHELVES else shelf
                continue
            if style != "Heading3":
                continue
            match = re.match(r"([A-Z]\d{2})\.\s+(.+)", text)
            if not match or shelf is None:
                continue
            original_id, name = match.groups()
            details = [paras[index + offset][1] for offset in range(1, 8)]
            meta, weave, effect, practice, consequence, failure_answer, mastery = details
            collection_slug, aspect_names, fixed_school, composite_slug = COLLECTIONS[current]
            collection_id = f"collection:{collection_slug}"
            tension_match = re.search(r"Th([0-4]) Tu([0-4]) Kn([0-4]) Sp([0-4]) Ho([0-4]) Fi([0-4]) Ag([0-4]) Co([0-4])", weave)
            if not tension_match:
                raise ValueError(f"Missing tension profile for {current} {original_id}")
            values = [int(value) for value in tension_match.groups()]
            tension = dict(zip(["threads", "turns", "knots", "span", "hold", "fineness", "agency", "contradiction"], values))
            load_match = re.search(r"\bLOAD (\d+)\b", meta)
            source_load = int(load_match.group(1)) if load_match else -1
            school_names = [school for school in SCHOOLS if re.search(rf"\b{school}\b", weave, re.I)]
            if fixed_school and not school_names:
                school_names = [fixed_school]
            school_ids = [f"school:{school}" for school in school_names]
            stream_ids = [f"stream:{aspect}-{school}" for aspect in aspect_names for school in school_names]
            carrier_match = re.search(r"Carrier:\s*([^.|]+(?:\.[^|]*)?)", weave, re.I)
            meta_parts = [part.strip() for part in meta.split("|")]
            proof = next((re.sub(r"^PROOF\s+", "", part, flags=re.I) for part in meta_parts if part.upper().startswith("PROOF ")), "")
            doctrine = next((part for part in meta_parts if part.upper().endswith(" LENS")), "") or None
            function_tag = meta_parts[1].title() if len(meta_parts) > 1 else ""
            failure_body = after(failure_answer, "Failure and answer.")
            failure, _, answer = failure_body.partition("Safe shedding:")
            safe, _, counterplay = answer.partition("Counterplay:")
            spell_id = f"spell:{collection_slug}:{original_id.lower()}"
            spells.append({
                "id": spell_id, "title": name, "description": after(effect, "Effect."),
                "parentGroupIds": [f"shelf:{collection_slug}:{slug(shelf)}"],
                "facts": {
                    "originalId": original_id, "collectionId": collection_id, "collectionTitle": current,
                    "collectionType": "composite" if composite_slug else "foundational", "shelf": shelf,
                    "shelfPosition": int(original_id[1:]) % 10 or 10,
                    "aspectIds": [f"aspect:{aspect}" for aspect in aspect_names], "schoolIds": school_ids,
                    "streamIds": stream_ids, **({"compositeId": f"composite:{composite_slug}"} if composite_slug else {}),
                    "functionTag": function_tag, **({"doctrine": doctrine} if doctrine else {}),
                    **({"carrier": carrier_match.group(1).strip()} if carrier_match else {}),
                    "scale": shelf, "tension": tension, "sourceLoad": source_load, "calculatedLoad": sum(values),
                    "provenance": {"document": path.name, "collectionId": collection_id, "originalId": original_id, "location": f"{current} / {shelf} / {original_id}"},
                },
                "aliases": [original_id], "tags": [function_tag, shelf, *(school.title() for school in school_names)],
                "sources": [{"id": slug(path.stem), "title": path.stem.replace("_", " ")}], "status": "documented",
                "content": {"formula": after(weave, "Weave."), "purpose": after(effect, "Effect."),
                    "practice": after(practice, "Practice."), "proof": proof,
                    "consequence": after(consequence, "Consequence."), "failure": failure.strip(),
                    "safeShedding": safe.strip(), "counterplay": counterplay.strip(),
                    "mastery": after(mastery, "Mastery."), "sourceMeta": meta},
            })
        for title, (collection_slug, _, _, _) in COLLECTIONS.items():
            owned = [spell for spell in spells if spell["facts"]["collectionId"] == f"collection:{collection_slug}"]
            if owned and not any(item["id"] == f"collection:{collection_slug}" for item in collections):
                collections.append({"id": f"collection:{collection_slug}", "name": title, "type": owned[0]["facts"]["collectionType"],
                    **({"streamId": f"stream:{collection_slug}"} if owned[0]["facts"]["collectionType"] == "foundational" else {"compositeId": owned[0]["facts"]["compositeId"]}),
                    "spellIds": [item["id"] for item in owned], "expectedSpellCount": 50, "actualSpellCount": len(owned),
                    "sourceDocument": owned[0]["facts"]["provenance"]["document"], "status": "authored"})
    return spells, sorted(collections, key=lambda item: item["id"])


def extract_streams(collections):
    paras = paragraphs(SOURCE / "Panmagicon_Comprehensive_Guide.docx")
    authored = {item.get("streamId"): item["id"] for item in collections if item.get("streamId")}
    streams = []
    for aspect_index, aspect in enumerate(ASPECTS):
        start = next(i for i, (style, text) in enumerate(paras) if style == "Heading1" and text.lower() == aspect and i > 700)
        block = paras[start + 4:start + 28]
        for offset in range(0, 24, 3):
            school, application, consequence = (block[offset + step][1] for step in range(3))
            school_slug = slug(school)
            stream_id = f"stream:{aspect}-{school_slug}"
            streams.append({"id": stream_id, "aspectId": f"aspect:{aspect}", "schoolId": f"school:{school_slug}",
                "name": f"{aspect.title()} {school}", "description": application, "consequence": consequence,
                "status": "authored" if stream_id in authored else "defined",
                **({"collectionId": authored[stream_id]} if stream_id in authored else {}),
                "provenance": {"document": "Panmagicon_Comprehensive_Guide.docx", "location": f"Appendix A / {aspect.title()} / {school}"}})
    return streams


def stable_json(value):
    return json.dumps(value, ensure_ascii=False, indent=2) + "\n"


def write(path: Path, content: str, check: bool):
    if check:
        if not path.exists() or path.read_text(encoding="utf-8") != content:
            raise ValueError(f"Generated file is stale: {path.relative_to(ROOT)}")
    else:
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text(content, encoding="utf-8", newline="\n")


def main():
    check = "--check" in sys.argv
    spells, collections = extract_spellbooks()
    streams = extract_streams(collections)
    errors = []
    if len(spells) != 600: errors.append(f"expected 600 spells, found {len(spells)}")
    if len(collections) != 12: errors.append(f"expected 12 collections, found {len(collections)}")
    if len(streams) != 64: errors.append(f"expected 64 streams, found {len(streams)}")
    ids = [spell["id"] for spell in spells]
    if len(ids) != len(set(ids)): errors.append("duplicate global spell IDs")
    for spell in spells:
        if spell["facts"]["sourceLoad"] != spell["facts"]["calculatedLoad"]:
            errors.append(f"load mismatch: {spell['id']}")
    for collection in collections:
        owned = [spell for spell in spells if spell["facts"]["collectionId"] == collection["id"]]
        distribution = {shelf: sum(spell["facts"]["shelf"] == shelf for spell in owned) for shelf in SHELVES}
        if any(count != 10 for count in distribution.values()): errors.append(f"invalid shelf distribution: {collection['id']} {distribution}")
    if errors: raise ValueError("\n".join(errors))
    function_tags = sorted({spell["facts"]["functionTag"] for spell in spells})
    carriers = sorted({spell["facts"].get("carrier") for spell in spells if spell["facts"].get("carrier")})
    compact_spells = []
    for spell in spells:
        facts = spell["facts"]
        compact_spells.append([
            facts["originalId"], spell["title"], facts["collectionId"].split(":", 1)[1],
            SHELVES.index(facts["shelf"]), function_tags.index(facts["functionTag"]),
            [SCHOOLS.index(value.split(":", 1)[1]) for value in facts["schoolIds"]],
            list(facts["tension"].values()), facts["sourceLoad"], facts.get("doctrine"),
            carriers.index(facts["carrier"]) if facts.get("carrier") else None,
        ])
    write(OUTPUT / "manifest.generated.json", stable_json({"streams": streams, "collections": collections, "functionTags": function_tags, "carriers": carriers, "spells": compact_spells}), check)
    for collection in collections:
        owned = [spell for spell in spells if spell["facts"]["collectionId"] == collection["id"]]
        write(OUTPUT / "partitions" / f"{collection['id'].split(':')[1]}.generated.json", stable_json(owned), check)
    coverage = {"aspects": 8, "schools": 8, "streams": {"total": 64, "authored": 8, "defined": 56},
        "composites": {"authored": 4, "possiblePairs": 28}, "collections": {"authored": 12, "plannedTotal": 92},
        "spells": {"authored": 600, "planned": 4600, "percent": round(600 / 4600 * 100, 2)},
        "shelves": {shelf: sum(spell["facts"]["shelf"] == shelf for spell in spells) for shelf in SHELVES},
        "load": {"min": min(spell["facts"]["calculatedLoad"] for spell in spells), "max": max(spell["facts"]["calculatedLoad"] for spell in spells)}}
    write(OUTPUT / "coverage.generated.json", stable_json(coverage), check)
    print(f"Panmagicon: 8 aspects, 8 schools, {len(streams)} streams, {len(collections)} collections, {len(spells)} spells")


if __name__ == "__main__":
    main()
