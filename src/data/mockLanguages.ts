
import { Language } from '@/types/language';

export const mockLanguages: Language[] = [
  {
    id: 'spanish',
    name: 'Spanish',
    coordinates: [-3.7038, 40.4168], // Madrid
    family: 'Indo-European',
    branch: 'Romance',
    speakers: 500000000,
    endangermentStatus: 'safe',
    region: 'Europe, Americas',
    script: 'Latin',
    alphabet: 'A, B, C, CH, D, E, F, G, H, I, J, K, L, LL, M, N, Ñ, O, P, Q, R, RR, S, T, U, V, W, X, Y, Z',
    phonemes: ['p', 'b', 't', 'd', 'k', 'g', 'f', 'θ', 's', 'x', 'tʃ', 'm', 'n', 'ɲ', 'l', 'ʎ', 'r', 'ɾ'],
    consonants: ['p', 'b', 't', 'd', 'k', 'g', 'f', 'θ', 's', 'x', 'tʃ', 'm', 'n', 'ɲ', 'l', 'ʎ', 'r', 'ɾ'],
    vowels: ['a', 'e', 'i', 'o', 'u'],
    syntaxFeatures: ['SVO', 'gender agreement', 'verb conjugation'],
    grammarNotes: 'Highly inflected verb system with rich conjugation patterns. Grammatical gender for nouns.',
    country: 'Spain',
    alternativeNames: ['Castilian', 'Español', 'Castellano'],
    // Geographic coverage area for Spain and Latin America
    geographicArea: [
      [[-9.5, 35.8], [-9.5, 43.8], [4.3, 43.8], [4.3, 35.8], [-9.5, 35.8]], // Spain
      [[-118.4, 14.5], [-118.4, 32.7], [-86.7, 32.7], [-86.7, 14.5], [-118.4, 14.5]], // Mexico
      [[-81.4, -4.2], [-81.4, 12.4], [-66.9, 12.4], [-66.9, -4.2], [-81.4, -4.2]], // Northern South America
      [[-74.0, -55.1], [-74.0, -21.8], [-53.6, -21.8], [-53.6, -55.1], [-74.0, -55.1]]  // Southern South America
    ]
  },
  {
    id: 'mandarin',
    name: 'Mandarin Chinese',
    coordinates: [116.4074, 39.9042], // Beijing
    family: 'Sino-Tibetan',
    branch: 'Sinitic',
    speakers: 918000000,
    endangermentStatus: 'safe',
    region: 'East Asia',
    script: 'Chinese characters',
    alphabet: 'Logographic system with thousands of characters',
    phonemes: ['p', 'pʰ', 't', 'tʰ', 'k', 'kʰ', 'f', 's', 'ʂ', 'x', 'tʂ', 'tʂʰ', 'm', 'n', 'ŋ', 'l', 'ɻ'],
    consonants: ['p', 'pʰ', 't', 'tʰ', 'k', 'kʰ', 'f', 's', 'ʂ', 'x', 'tʂ', 'tʂʰ', 'm', 'n', 'ŋ', 'l', 'ɻ'],
    vowels: ['a', 'ə', 'e', 'i', 'o', 'u', 'y'],
    syntaxFeatures: ['SVO', 'tonal', 'isolating'],
    grammarNotes: 'Tonal language with four main tones. Minimal inflection, meaning conveyed through word order and context.',
    country: 'China',
    alternativeNames: ['Standard Chinese', 'Putonghua', '普通话'],
    // Geographic coverage area for China (excluding Tibet, Xinjiang special cases)
    geographicArea: [
      [[73.6, 18.2], [73.6, 53.6], [134.8, 53.6], [134.8, 18.2], [73.6, 18.2]]
    ]
  },
  {
    id: 'arabic',
    name: 'Modern Standard Arabic',
    coordinates: [39.8579, 21.4858], // Saudi Arabia
    family: 'Afro-Asiatic',
    branch: 'Semitic',
    speakers: 422000000,
    endangermentStatus: 'safe',
    region: 'Middle East, North Africa',
    script: 'Arabic',
    alphabet: 'ا، ب، ت، ث، ج، ح، خ، د، ذ، ر، ز، س، ش، ص، ض، ط، ظ، ع، غ، ف، ق، ك، ل، م، ن، ه، و، ي',
    phonemes: ['b', 't', 'θ', 'd', 'ð', 'k', 'q', 'ʔ', 'f', 's', 'ʃ', 'ɣ', 'χ', 'ħ', 'ʕ', 'h', 'm', 'n', 'l', 'r'],
    consonants: ['b', 't', 'θ', 'd', 'ð', 'k', 'q', 'ʔ', 'f', 's', 'ʃ', 'ɣ', 'χ', 'ħ', 'ʕ', 'h', 'm', 'n', 'l', 'r'],
    vowels: ['a', 'i', 'u'],
    syntaxFeatures: ['VSO', 'trilateral roots', 'gender agreement'],
    grammarNotes: 'Semitic language with trilateral root system. Rich morphological system with extensive derivation patterns.',
    country: 'Multiple',
    alternativeNames: ['العربية', 'al-ʿArabiyyah'],
    // Geographic coverage area for MENA region
    geographicArea: [
      [[-17.1, 12.0], [-17.1, 37.5], [63.3, 37.5], [63.3, 12.0], [-17.1, 12.0]]
    ]
  },
  {
    id: 'berber',
    name: 'Berber (Tamazight)',
    coordinates: [-6.8498, 34.0209], // Morocco
    family: 'Afro-Asiatic',
    branch: 'Berber',
    speakers: 25000000,
    endangermentStatus: 'vulnerable',
    region: 'North Africa',
    script: 'Tifinagh, Arabic, Latin',
    alphabet: 'ⵜⵉⴼⵉⵏⴰⵖ (Tifinagh script)',
    phonemes: ['b', 't', 'd', 'k', 'g', 'q', 'f', 's', 'ʃ', 'x', 'ɣ', 'χ', 'ħ', 'ʕ', 'h', 'm', 'n', 'l', 'r'],
    consonants: ['b', 't', 'd', 'k', 'g', 'q', 'f', 's', 'ʃ', 'x', 'ɣ', 'χ', 'ħ', 'ʕ', 'h', 'm', 'n', 'l', 'r'],
    vowels: ['a', 'i', 'u'],
    syntaxFeatures: ['VSO', 'trilateral roots', 'gender agreement'],
    grammarNotes: 'Afro-Asiatic language with complex verb conjugation system. Various regional dialects.',
    country: 'Morocco, Algeria, Tunisia',
    alternativeNames: ['Amazigh', 'Tamazight'],
    // Geographic coverage area for Berber regions in North Africa (overlaps with Arabic)
    geographicArea: [
      [[-12.0, 27.7], [-12.0, 35.9], [11.9, 35.9], [11.9, 27.7], [-12.0, 27.7]]
    ]
  },
  {
    id: 'basque',
    name: 'Basque',
    coordinates: [-2.9253, 43.2630], // Bilbao
    family: 'Language isolate',
    branch: 'N/A',
    speakers: 750000,
    endangermentStatus: 'vulnerable',
    region: 'Europe',
    script: 'Latin',
    alphabet: 'A, B, D, E, F, G, H, I, J, K, L, M, N, O, P, R, S, T, U, X, Z',
    phonemes: ['p', 'b', 't', 'd', 'k', 'g', 'f', 's', 'ʃ', 'x', 'h', 'ts', 'tʃ', 'm', 'n', 'ɲ', 'l', 'ʎ', 'r', 'ɾ'],
    consonants: ['p', 'b', 't', 'd', 'k', 'g', 'f', 's', 'ʃ', 'x', 'h', 'ts', 'tʃ', 'm', 'n', 'ɲ', 'l', 'ʎ', 'r', 'ɾ'],
    vowels: ['a', 'e', 'i', 'o', 'u'],
    syntaxFeatures: ['SOV', 'ergative', 'agglutinative'],
    grammarNotes: 'Ergative-absolutive alignment. Complex verb agreement system. Language isolate with no known relatives.',
    country: 'Spain/France',
    alternativeNames: ['Euskera', 'Euskara'],
    // Geographic coverage area for Basque Country (overlaps with Spanish)
    geographicArea: [
      [[-3.4, 42.6], [-3.4, 43.5], [-1.7, 43.5], [-1.7, 42.6], [-3.4, 42.6]]
    ]
  },
  {
    id: 'tibetan',
    name: 'Tibetan',
    coordinates: [91.1, 29.6], // Lhasa
    family: 'Sino-Tibetan',
    branch: 'Tibetic',
    speakers: 6000000,
    endangermentStatus: 'vulnerable',
    region: 'Tibet, China',
    script: 'Tibetan',
    alphabet: 'Tibetan script (དབུ་ཅན་)',
    phonemes: ['p', 'pʰ', 't', 'tʰ', 'k', 'kʰ', 'q', 'qʰ', 'f', 's', 'ʃ', 'x', 'h', 'm', 'n', 'ŋ', 'l', 'r'],
    consonants: ['p', 'pʰ', 't', 'tʰ', 'k', 'kʰ', 'q', 'qʰ', 'f', 's', 'ʃ', 'x', 'h', 'm', 'n', 'ŋ', 'l', 'r'],
    vowels: ['a', 'e', 'i', 'o', 'u'],
    syntaxFeatures: ['SOV', 'agglutinative', 'honorific system'],
    grammarNotes: 'Sino-Tibetan language with complex honorific system. Written in Tibetan script.',
    country: 'China (Tibet)',
    alternativeNames: ['བོད་སྐད', 'Bod skad'],
    // Geographic coverage area for Tibet (overlaps with Mandarin)
    geographicArea: [
      [[78.4, 26.8], [78.4, 36.5], [104.7, 36.5], [104.7, 26.8], [78.4, 26.8]]
    ]
  },
  {
    id: 'uyghur',
    name: 'Uyghur',
    coordinates: [87.6, 43.8], // Urumqi
    family: 'Turkic',
    branch: 'Southeastern Turkic',
    speakers: 10000000,
    endangermentStatus: 'vulnerable',
    region: 'Xinjiang, China',
    script: 'Arabic, Latin, Cyrillic',
    alphabet: 'Modified Arabic script',
    phonemes: ['p', 'b', 't', 'd', 'k', 'g', 'q', 'f', 's', 'ʃ', 'x', 'χ', 'h', 'm', 'n', 'ŋ', 'l', 'r'],
    consonants: ['p', 'b', 't', 'd', 'k', 'g', 'q', 'f', 's', 'ʃ', 'x', 'χ', 'h', 'm', 'n', 'ŋ', 'l', 'r'],
    vowels: ['a', 'e', 'i', 'o', 'u', 'ø', 'y'],
    syntaxFeatures: ['SOV', 'agglutinative', 'vowel harmony'],
    grammarNotes: 'Turkic language with vowel harmony and agglutinative morphology.',
    country: 'China (Xinjiang)',
    alternativeNames: ['ئۇيغۇر تىلى', 'Uyghur tili'],
    // Geographic coverage area for Xinjiang (overlaps with Mandarin)
    geographicArea: [
      [[73.4, 34.3], [73.4, 49.2], [96.4, 49.2], [96.4, 34.3], [73.4, 34.3]]
    ]
  },
  {
    id: 'japanese',
    name: 'Japanese',
    coordinates: [139.6917, 35.6895], // Tokyo
    family: 'Japonic',
    branch: 'Japanese',
    speakers: 125000000,
    endangermentStatus: 'safe',
    region: 'East Asia',
    script: 'Hiragana, Katakana, Kanji',
    alphabet: 'ひらがな (Hiragana), カタカナ (Katakana), 漢字 (Kanji)',
    phonemes: ['p', 'b', 't', 'd', 'k', 'g', 'f', 's', 'ʃ', 'h', 'ts', 'tʃ', 'm', 'n', 'ɲ', 'ŋ', 'l', 'ɾ', 'j', 'w'],
    consonants: ['p', 'b', 't', 'd', 'k', 'g', 'f', 's', 'ʃ', 'h', 'ts', 'tʃ', 'm', 'n', 'ɲ', 'ŋ', 'l', 'ɾ', 'j', 'w'],
    vowels: ['a', 'i', 'u', 'e', 'o'],
    syntaxFeatures: ['SOV', 'agglutinative', 'honorific system'],
    grammarNotes: 'Complex honorific system. Three writing systems used simultaneously. Agglutinative with extensive verb conjugation.',
    country: 'Japan',
    alternativeNames: ['日本語', 'Nihongo'],
    // Geographic coverage area for Japan
    geographicArea: [
      [[129.0, 31.0], [129.0, 45.6], [145.9, 45.6], [145.9, 31.0], [129.0, 31.0]]
    ]
  }
];

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
