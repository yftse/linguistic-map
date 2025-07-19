
import maplibregl from 'maplibre-gl';
import { Language } from '@/types/language';

export const createMapEventHandlers = (
  map: maplibregl.Map,
  languages: Language[],
  onLanguageClick: (language: Language) => void
) => {
  const handleAreaClick = (e: maplibregl.MapMouseEvent & { features?: maplibregl.MapGeoJSONFeature[] }) => {
    const features = map.queryRenderedFeatures(e.point, { layers: ['language-areas'] });
    if (features && features[0]) {
      const feature = features[0];
      const languageId = feature.properties?.id;
      const language = languages.find(lang => lang.id === languageId);
      if (language) {
        onLanguageClick(language);
      }
    }
  };

  const setCursorPointer = () => {
    map.getCanvas().style.cursor = 'pointer';
  };
  
  const setCursorDefault = () => {
    map.getCanvas().style.cursor = '';
  };

  const addEventListeners = () => {
    map.on('click', 'language-areas', handleAreaClick);
    map.on('mouseenter', 'language-areas', setCursorPointer);
    map.on('mouseleave', 'language-areas', setCursorDefault);
  };

  const removeEventListeners = () => {
    map.off('click', 'language-areas', handleAreaClick);
    map.off('mouseenter', 'language-areas', setCursorPointer);
    map.off('mouseleave', 'language-areas', setCursorDefault);
  };

  return {
    addEventListeners,
    removeEventListeners
  };
};
