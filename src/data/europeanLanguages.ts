
import { Language } from '@/types/language';

export const europeanLanguages: Language[] = [
  {
    id: 'frisian',
    name: 'West Frisian',
    coordinates: [5.8, 53.2],
    family: 'Indo-European',
    branch: 'Germanic',
    speakers: 470000,
    endangermentStatus: 'vulnerable',
    region: 'Europe',
    script: 'Latin',
    alphabet: 'A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z',
    phonemes: ['p', 'b', 't', 'd', 'k', 'g', 'f', 'v', 's', 'z', 'x', 'ɣ', 'h', 'm', 'n', 'ŋ', 'l', 'r'],
    consonants: ['p', 'b', 't', 'd', 'k', 'g', 'f', 'v', 's', 'z', 'x', 'ɣ', 'h', 'm', 'n', 'ŋ', 'l', 'r'],
    vowels: ['a', 'e', 'i', 'o', 'u', 'y', 'ø'],
    syntaxFeatures: ['SVO', 'Germanic syntax'],
    grammarNotes: 'West Germanic language closely related to English and Low German.',
    country: 'Netherlands',
    alternativeNames: ['Frysk'],
    geographicArea: [
      [[4.9, 52.9], [4.9, 53.5], [6.1, 53.5], [6.1, 52.9], [4.9, 52.9]]
    ]
  },
  {
    id: 'sami',
    name: 'Northern Sami',
    coordinates: [23.0, 69.0],
    family: 'Uralic',
    branch: 'Samic',
    speakers: 20000,
    endangermentStatus: 'definitely_endangered',
    region: 'Europe',
    script: 'Latin',
    alphabet: 'Extended Latin with special characters',
    phonemes: ['p', 't', 'k', 'b', 'd', 'g', 'f', 's', 'ʃ', 'h', 'm', 'n', 'ŋ', 'l', 'r'],
    consonants: ['p', 't', 'k', 'b', 'd', 'g', 'f', 's', 'ʃ', 'h', 'm', 'n', 'ŋ', 'l', 'r'],
    vowels: ['a', 'e', 'i', 'o', 'u'],
    syntaxFeatures: ['SOV', 'agglutinative'],
    grammarNotes: 'Uralic language with extensive case system.',
    country: 'Norway/Sweden/Finland',
    alternativeNames: ['Davvisámegiella'],
    geographicArea: [
      [[15.0, 67.0], [15.0, 71.0], [30.0, 71.0], [30.0, 67.0], [15.0, 67.0]]
    ]
  },
  {
    id: 'romansch',
    name: 'Romansch',
    coordinates: [9.5, 46.6],
    family: 'Indo-European',
    branch: 'Romance',
    speakers: 60000,
    endangermentStatus: 'definitely_endangered',
    region: 'Europe',
    script: 'Latin',
    alphabet: 'A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z',
    phonemes: ['p', 'b', 't', 'd', 'k', 'g', 'f', 'v', 's', 'z', 'ʃ', 'ʒ', 'tʃ', 'dʒ', 'm', 'n', 'ɲ', 'l', 'r'],
    consonants: ['p', 'b', 't', 'd', 'k', 'g', 'f', 'v', 's', 'z', 'ʃ', 'ʒ', 'tʃ', 'dʒ', 'm', 'n', 'ɲ', 'l', 'r'],
    vowels: ['a', 'e', 'i', 'o', 'u'],
    syntaxFeatures: ['SVO', 'Romance syntax'],
    grammarNotes: 'Rhaeto-Romance language spoken in Switzerland.',
    country: 'Switzerland',
    alternativeNames: ['Rumantsch', 'Rhaeto-Romance'],
    geographicArea: [
      [[9.3, 46.4], [9.3, 46.8], [10.5, 46.8], [10.5, 46.4], [9.3, 46.4]]
    ]
  },
  {
    id: 'kalmyk',
    name: 'Kalmyk',
    coordinates: [44.3, 46.3],
    family: 'Mongolic',
    branch: 'Western Mongolic',
    speakers: 80000,
    endangermentStatus: 'severely_endangered',
    region: 'Europe',
    script: 'Cyrillic',
    alphabet: 'Cyrillic script with special characters',
    phonemes: ['p', 'b', 't', 'd', 'k', 'g', 'f', 'v', 's', 'z', 'ʃ', 'ʒ', 'x', 'ɣ', 'm', 'n', 'ŋ', 'l', 'r'],
    consonants: ['p', 'b', 't', 'd', 'k', 'g', 'f', 'v', 's', 'z', 'ʃ', 'ʒ', 'x', 'ɣ', 'm', 'n', 'ŋ', 'l', 'r'],
    vowels: ['a', 'e', 'i', 'o', 'u'],
    syntaxFeatures: ['SOV', 'agglutinative'],
    grammarNotes: 'Mongolic language spoken in Kalmykia, Russia.',
    country: 'Russia',
    alternativeNames: ['Хальмг келн'],
    geographicArea: [
      [[41.0, 45.0], [41.0, 47.5], [47.0, 47.5], [47.0, 45.0], [41.0, 45.0]]
    ]
  },
  {
    id: 'chechen',
    name: 'Chechen',
    coordinates: [45.7, 43.3],
    family: 'Northeast Caucasian',
    branch: 'Nakh',
    speakers: 1350000,
    endangermentStatus: 'vulnerable',
    region: 'Europe',
    script: 'Cyrillic',
    alphabet: 'Cyrillic script with special characters',
    phonemes: ['p', 'b', 't', 'd', 'k', 'g', 'q', 'ʔ', 'f', 's', 'ʃ', 'x', 'χ', 'h', 'm', 'n', 'l', 'r'],
    consonants: ['p', 'b', 't', 'd', 'k', 'g', 'q', 'ʔ', 'f', 's', 'ʃ', 'x', 'χ', 'h', 'm', 'n', 'l', 'r'],
    vowels: ['a', 'e', 'i', 'o', 'u'],
    syntaxFeatures: ['SOV', 'ergative'],
    grammarNotes: 'Northeast Caucasian language with complex phonology.',
    country: 'Russia',
    alternativeNames: ['Нохчийн мотт'],
    geographicArea: [
      [[45.0, 42.8], [45.0, 43.8], [46.2, 43.8], [46.2, 42.8], [45.0, 42.8]]
    ]
  },
  {
    id: 'kazakh',
    name: 'Kazakh',
    coordinates: [66.9, 48.0],
    family: 'Turkic',
    branch: 'Kipchak',
    speakers: 13000000,
    endangermentStatus: 'safe',
    region: 'Central Asia',
    script: 'Cyrillic',
    alphabet: 'Cyrillic script with special characters',
    phonemes: ['p', 'b', 't', 'd', 'k', 'g', 'q', 'f', 's', 'z', 'ʃ', 'ʒ', 'x', 'ɣ', 'm', 'n', 'ŋ', 'l', 'r'],
    consonants: ['p', 'b', 't', 'd', 'k', 'g', 'q', 'f', 's', 'z', 'ʃ', 'ʒ', 'x', 'ɣ', 'm', 'n', 'ŋ', 'l', 'r'],
    vowels: ['a', 'e', 'i', 'o', 'u', 'ø', 'y'],
    syntaxFeatures: ['SOV', 'agglutinative', 'vowel harmony'],
    grammarNotes: 'Turkic language with vowel harmony.',
    country: 'Kazakhstan',
    alternativeNames: ['Қазақ тілі'],
    geographicArea: [
      [[46.5, 40.6], [46.5, 55.4], [87.3, 55.4], [87.3, 40.6], [46.5, 40.6]]
    ]
  },
  {
    id: 'uzbek',
    name: 'Uzbek',
    coordinates: [64.6, 41.4],
    family: 'Turkic',
    branch: 'Karluk',
    speakers: 34000000,
    endangermentStatus: 'safe',
    region: 'Central Asia',
    script: 'Latin',
    alphabet: 'Latin script with special characters',
    phonemes: ['p', 'b', 't', 'd', 'k', 'g', 'q', 'f', 'v', 's', 'z', 'ʃ', 'ʒ', 'x', 'ɣ', 'm', 'n', 'ŋ', 'l', 'r'],
    consonants: ['p', 'b', 't', 'd', 'k', 'g', 'q', 'f', 'v', 's', 'z', 'ʃ', 'ʒ', 'x', 'ɣ', 'm', 'n', 'ŋ', 'l', 'r'],
    vowels: ['a', 'e', 'i', 'o', 'u'],
    syntaxFeatures: ['SOV', 'agglutinative'],
    grammarNotes: 'Turkic language of the Karluk branch.',
    country: 'Uzbekistan',
    alternativeNames: ['Oʻzbek tili'],
    geographicArea: [
      [[55.9, 37.2], [55.9, 45.6], [73.1, 45.6], [73.1, 37.2], [55.9, 37.2]]
    ]
  },
  {
    id: 'kyrgyz',
    name: 'Kyrgyz',
    coordinates: [74.6, 41.2],
    family: 'Turkic',
    branch: 'Kipchak',
    speakers: 4300000,
    endangermentStatus: 'safe',
    region: 'Central Asia',
    script: 'Cyrillic',
    alphabet: 'Cyrillic script with special characters',
    phonemes: ['p', 'b', 't', 'd', 'k', 'g', 'q', 'f', 's', 'z', 'ʃ', 'ʒ', 'x', 'ɣ', 'm', 'n', 'ŋ', 'l', 'r'],
    consonants: ['p', 'b', 't', 'd', 'k', 'g', 'q', 'f', 's', 'z', 'ʃ', 'ʒ', 'x', 'ɣ', 'm', 'n', 'ŋ', 'l', 'r'],
    vowels: ['a', 'e', 'i', 'o', 'u', 'ø', 'y'],
    syntaxFeatures: ['SOV', 'agglutinative', 'vowel harmony'],
    grammarNotes: 'Turkic language with vowel harmony system.',
    country: 'Kyrgyzstan',
    alternativeNames: ['Кыргыз тили'],
    geographicArea: [
      [[69.3, 39.2], [69.3, 43.2], [80.3, 43.2], [80.3, 39.2], [69.3, 39.2]]
    ]
  }
];
