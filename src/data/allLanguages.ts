
import { Language } from '@/types/language';
import { mockLanguages } from './mockLanguages';
import { europeanLanguages } from './europeanLanguages';

export const allLanguages: Language[] = [...mockLanguages, ...europeanLanguages];

export const classificationFilters = [
  { id: 'language', name: 'Individual Language', description: 'Each language shown separately' },
  { id: 'family', name: 'Language Family', description: 'Group by major language families' },
  { id: 'branch', name: 'Language Branch', description: 'Sub-groups within language families' },
  { id: 'phonemes', name: 'Shared Phonemes', description: 'Common sound systems' },
  { id: 'consonants', name: 'Consonant Systems', description: 'Consonant inventories' },
  { id: 'vowels', name: 'Vowel Systems', description: 'Vowel inventories' },
  { id: 'syntax', name: 'Syntax Features', description: 'Word order and grammatical patterns' },
  { id: 'endangerment', name: 'Endangerment Level', description: 'Conservation status' },
  { id: 'region', name: 'Geographic Region', description: 'Continental groupings' }
];
