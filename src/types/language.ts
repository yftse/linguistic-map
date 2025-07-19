
export interface Language {
  id: string;
  name: string;
  coordinates: [number, number]; // [longitude, latitude]
  family: string;
  branch: string;
  speakers: number;
  endangermentStatus: 'safe' | 'vulnerable' | 'definitely_endangered' | 'severely_endangered' | 'critically_endangered' | 'extinct';
  region: string;
  script: string;
  alphabet?: string;
  phonemes: string[];
  consonants: string[];
  vowels: string[];
  syntaxFeatures: string[];
  grammarNotes: string;
  country: string;
  alternativeNames: string[];
  geographicArea: number[][][]; // Array of polygon coordinates
}

export interface ClassificationFilter {
  id: string;
  name: string;
  description: string;
}

export type FilterType = 'language' | 'family' | 'branch' | 'phonemes' | 'consonants' | 'vowels' | 'syntax' | 'endangerment' | 'region';
