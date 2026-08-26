import { ChangeDetectionStrategy, Component, computed, HostListener, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppStore } from './core/app.store';
import { BeerTaxonomyEntry } from './core/data/beer-taxonomy-entry';
import { TaxonomyViewport } from './taxonomy-viewport';
@Component({selector:'app-root',imports:[FormsModule,DatePipe,TaxonomyViewport],templateUrl:'./app.html',styleUrl:'./app.scss',changeDetection:ChangeDetectionStrategy.OnPush})
export class App {
 readonly store=inject(AppStore);readonly menuOpen=signal(false);readonly accountOpen=signal(false);readonly settingsOpen=signal(false);readonly dialog=signal<string|null>(null);readonly draft=signal({title:'',type:'',description:'',placement:'beer'});readonly filterOpen=signal(false);readonly filterQuery=signal('');readonly searchQuery=signal('');readonly searchSuggestions=computed(()=>{const terms=this.searchTerms();if(!terms.length)return[];return this.store.entries.map((entry,index)=>({entry,index,score:this.searchScore(entry,terms)})).filter(result=>result.score>0).sort((a,b)=>b.score-a.score||a.index-b.index||a.entry.title.localeCompare(b.entry.title)).slice(0,10)});readonly filterSuggestions=computed(()=>{const query=this.filterQuery().trim().toLowerCase();return this.store.filterTagOptions.filter(tag=>!this.store.selectedFilters().includes(tag)&&(!query||tag.includes(query))).slice(0,24)});
 private searchTerms(){return this.searchQuery().trim().toLowerCase().split(/\s+/).filter(Boolean)}
 private searchScore(entry:BeerTaxonomyEntry,terms:string[]){const text=JSON.stringify(entry).toLowerCase();return terms.reduce((score,term,index)=>score+(text.match(new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'),'g'))?.length??0)*(terms.length-index),0)}
 selectSearchEntry(entry:BeerTaxonomyEntry,viewport:TaxonomyViewport){this.store.clearFilters();this.searchQuery.set(entry.title);const node=this.store.scene().nodes.find(candidate=>candidate.id===entry.id);if(node)viewport.immersiveFocus(node)}
 filterLabel(tag:string){return tag.replaceAll('-', ' ').replace(/\b\w/g,char=>char.toUpperCase())}
 toggleFilterTag(tag:string){this.store.toggleFilter(tag);this.filterQuery.set('')}
 open(kind:string){this.dialog.set(kind);this.menuOpen.set(false)} close(){this.dialog.set(null)}
 submit(){if(!this.draft().title.trim())return;const items=this.submissions();items.push({...this.draft(),status:'pending',submittedAt:new Date().toISOString()});localStorage.setItem('beer-taxonomy.submissions.v1',JSON.stringify(items));this.open('submissions')}
 submissions():any[]{try{return JSON.parse(localStorage.getItem('beer-taxonomy.submissions.v1')??'[]')}catch{return[]}}
 storageRows(){return Object.keys(localStorage).filter(k=>k.startsWith('beer-taxonomy.')).map(k=>({key:k,value:localStorage.getItem(k)??'',size:(localStorage.getItem(k)??'').length}))}
 clearData(){for(const key of Object.keys(localStorage))if(key.startsWith('beer-taxonomy.'))localStorage.removeItem(key)}
 @HostListener('document:keydown.escape') escape(){if(this.dialog())this.close();else this.menuOpen.set(false)}
}
