
import { FilterType } from '@/types/language';

// Enhanced color schemes for all classification systems
export const enhancedColorSchemes = {
  language: {
    // Original languages
    'Spanish': '#3B82F6', // Blue
    'Mandarin Chinese': '#EF4444', // Red
    'Modern Standard Arabic': '#F59E0B', // Orange
    'Berber (Tamazight)': '#8B5CF6', // Purple
    'Basque': '#EC4899', // Pink
    'Tibetan': '#10B981', // Green
    'Uyghur': '#F97316', // Dark orange
    'Japanese': '#6366F1', // Indigo
    // European languages
    'West Frisian': '#059669', // Emerald
    'Northern Sami': '#7C3AED', // Violet
    'Romansch': '#DC2626', // Red
    'Kalmyk': '#0891B2', // Cyan
    'Chechen': '#BE123C', // Rose
    // Central Asian languages
    'Kazakh': '#CA8A04', // Yellow
    'Uzbek': '#9333EA', // Purple
    'Kyrgyz': '#0D9488', // Teal
    'default': '#6B7280' // Gray
  },
  family: {
    'Indo-European': '#3B82F6', // Blue
    'Sino-Tibetan': '#EF4444', // Red
    'Afro-Asiatic': '#F59E0B', // Orange
    'Turkic': '#10B981', // Green
    'Language isolate': '#8B5CF6', // Purple
    'Japonic': '#EC4899', // Pink
    'Uralic': '#059669', // Emerald
    'Mongolic': '#0891B2', // Cyan
    'Northeast Caucasian': '#BE123C', // Rose
    'default': '#6B7280' // Gray
  },
  branch: {
    'Romance': '#3B82F6', // Blue
    'Germanic': '#059669', // Emerald
    'Sinitic': '#EF4444', // Red
    'Tibetic': '#DC2626', // Dark red
    'Semitic': '#F59E0B', // Orange
    'Berber': '#8B5CF6', // Purple
    'Southeastern Turkic': '#10B981', // Green
    'Kipchak': '#CA8A04', // Yellow
    'Karluk': '#9333EA', // Purple
    'Japanese': '#EC4899', // Pink
    'Samic': '#7C3AED', // Violet
    'Western Mongolic': '#0891B2', // Cyan
    'Nakh': '#BE123C', // Rose
    'N/A': '#6B7280', // Gray
    'default': '#6B7280'
  },
  endangerment: {
    'safe': '#10B981', // Green
    'vulnerable': '#F59E0B', // Orange
    'definitely_endangered': '#EF4444', // Red
    'severely_endangered': '#DC2626', // Dark red
    'critically_endangered': '#991B1B', // Very dark red
    'extinct': '#374151', // Dark gray
    'default': '#6B7280'
  },
  region: {
    'Europe': '#3B82F6', // Blue
    'East Asia': '#EF4444', // Red
    'South America': '#10B981', // Green
    'Middle East': '#F59E0B', // Orange
    'North Africa': '#F97316', // Dark orange
    'Americas': '#059669', // Emerald
    'Europe, Americas': '#6366F1', // Indigo
    'Middle East, North Africa': '#F97316', // Dark orange
    'Tibet, China': '#DC2626', // Dark red
    'Xinjiang, China': '#10B981', // Green
    'Central Asia': '#CA8A04', // Yellow
    'default': '#6B7280'
  }
};

export const getColorForValue = (filterType: FilterType, value: string): string => {
  const scheme = enhancedColorSchemes[filterType as keyof typeof enhancedColorSchemes];
  if (!scheme) return enhancedColorSchemes.family.default;
  
  return (scheme as any)[value] || (scheme as any).default || enhancedColorSchemes.family.default;
};
