export interface SourcedValue<T> {
  readonly value: T;
  readonly sourceIds: readonly string[];
  readonly derivation: 'authored-summary' | 'source-value' | 'calculated';
}

export interface ClimateProfile {
  readonly character: string;
  readonly annualPrecipitationMm?: { readonly min: number; readonly max: number };
  readonly temperatureC?: { readonly min: number; readonly max: number };
}

export interface EcologicalEnrichment {
  readonly targetId: string;
  readonly summary?: SourcedValue<string>;
  readonly landscape?: SourcedValue<readonly string[]>;
  readonly climate?: SourcedValue<ClimateProfile>;
  readonly vegetation?: SourcedValue<readonly string[]>;
  readonly ecologicalProcesses?: SourcedValue<readonly string[]>;
  readonly conservationContext?: SourcedValue<string>;
  readonly characteristicSpeciesIds?: readonly string[];
  readonly countryIds?: readonly string[];
  readonly sources: readonly string[];
  readonly status: 'authored' | 'derived';
  readonly overrides?: {
    readonly generatedFields: readonly string[];
    readonly rationale: string;
  };
}

export interface EcologicalSpecies {
  readonly id: string;
  readonly commonName: string;
  readonly scientificName: string;
  readonly sourceIds: readonly string[];
}

export interface EcologicalCountry {
  readonly id: string;
  readonly name: string;
  /** ISO 3166-1 alpha-2. */
  readonly code: string;
}
