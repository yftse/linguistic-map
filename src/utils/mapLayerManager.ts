
import maplibregl from 'maplibre-gl';
import { Language, FilterType } from '@/types/language';
import { getColorForValue } from '@/utils/enhancedColorSchemes';

export const removeExistingLayers = (map: maplibregl.Map): void => {
  const existingLayers = ['language-areas', 'language-areas-stroke'];
  const existingSources = ['language-areas'];

  existingLayers.forEach(layerId => {
    if (map.getLayer(layerId)) {
      try {
        map.removeLayer(layerId);
      } catch (error) {
        console.log('Layer removal warning:', error);
      }
    }
  });

  existingSources.forEach(sourceId => {
    if (map.getSource(sourceId)) {
      try {
        map.removeSource(sourceId);
      } catch (error) {
        console.log('Source removal warning:', error);
      }
    }
  });
};

export const createLanguageAreasData = (
  languages: Language[], 
  selectedFilter: FilterType
) => {
  return {
    type: 'FeatureCollection' as const,
    features: languages.map(lang => ({
      type: 'Feature' as const,
      geometry: {
        type: 'MultiPolygon' as const,
        coordinates: lang.geographicArea.map(area => [area])
      },
      properties: {
        id: lang.id,
        name: lang.name,
        family: lang.family,
        branch: lang.branch,
        speakers: lang.speakers,
        endangerment: lang.endangermentStatus,
        region: lang.region,
        color: getColorForValue(selectedFilter, getFilterValue(lang, selectedFilter))
      }
    }))
  };
};

export const addLanguageAreasLayers = (map: maplibregl.Map, languageAreas: any): void => {
  // Add language areas source
  map.addSource('language-areas', {
    type: 'geojson',
    data: languageAreas
  });

  // Add filled areas layer with transparency for overlapping
  map.addLayer({
    id: 'language-areas',
    type: 'fill',
    source: 'language-areas',
    paint: {
      'fill-color': ['get', 'color'],
      'fill-opacity': 0.4
    }
  });

  // Add stroke layer for better visibility
  map.addLayer({
    id: 'language-areas-stroke',
    type: 'line',
    source: 'language-areas',
    paint: {
      'line-color': ['get', 'color'],
      'line-width': 1.5,
      'line-opacity': 0.8
    }
  });
};

const getFilterValue = (language: Language, filterType: FilterType): string => {
  switch (filterType) {
    case 'language': return language.name;
    case 'family': return language.family;
    case 'branch': return language.branch;
    case 'endangerment': return language.endangermentStatus;
    case 'region': return language.region;
    case 'phonemes': return language.phonemes.length.toString();
    case 'consonants': return language.consonants.length.toString();
    case 'vowels': return language.vowels.length.toString();
    case 'syntax': return language.syntaxFeatures[0] || 'Unknown';
    default: return 'Unknown';
  }
};
