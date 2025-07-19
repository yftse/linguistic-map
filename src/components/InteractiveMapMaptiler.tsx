
import React, { useEffect, useRef, useState } from 'react';
import 'maplibre-gl/dist/maplibre-gl.css';
import { Language, FilterType } from '@/types/language';
import { createMaptilerMap, addNavigationControl } from '@/utils/maptilerConfig';
import { removeExistingLayers, createLanguageAreasData, addLanguageAreasLayers } from '@/utils/mapLayerManager';
import { createMapEventHandlers } from '@/utils/mapEventHandlers';

interface InteractiveMapMaptilerProps {
  languages: Language[];
  selectedFilter: FilterType;
  onLanguageClick: (language: Language) => void;
}

const InteractiveMapMaptiler: React.FC<InteractiveMapMaptilerProps> = ({
  languages,
  selectedFilter,
  onLanguageClick
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const eventHandlers = useRef<any>(null);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    console.log('Initializing Maptiler map...');
    
    try {
      map.current = createMaptilerMap(mapContainer.current);
      addNavigationControl(map.current);

      map.current.on('load', () => {
        console.log('Maptiler map loaded successfully');
        setMapLoaded(true);
      });

      map.current.on('error', (e) => {
        console.error('Maptiler map error:', e);
      });

    } catch (error) {
      console.error('Error creating Maptiler map:', error);
    }

    return () => {
      if (map.current) {
        console.log('Cleaning up map...');
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!map.current || !mapLoaded) {
      console.log('Map not ready for language data update');
      return;
    }

    console.log('Updating Maptiler map with filter:', selectedFilter, 'and', languages.length, 'languages');

    try {
      // Remove existing layers and event listeners
      if (eventHandlers.current) {
        eventHandlers.current.removeEventListeners();
      }
      removeExistingLayers(map.current);

      // Create and add new layers
      const languageAreas = createLanguageAreasData(languages, selectedFilter);
      addLanguageAreasLayers(map.current, languageAreas);

      // Set up event handlers
      eventHandlers.current = createMapEventHandlers(map.current, languages, onLanguageClick);
      eventHandlers.current.addEventListeners();

    } catch (error) {
      console.error('Error updating map layers:', error);
    }

    // Cleanup function for event listeners
    return () => {
      if (eventHandlers.current) {
        eventHandlers.current.removeEventListeners();
      }
    };

  }, [languages, selectedFilter, mapLoaded, onLanguageClick]);

  return (
    <div className="relative w-full h-full">
      <div 
        ref={mapContainer} 
        className="w-full h-full"
        style={{ minHeight: '400px' }}
      />
      <div className="absolute top-4 right-4 bg-white px-3 py-2 rounded-lg shadow-lg text-sm font-medium">
        Maptiler - Enhanced Language Areas
      </div>
      {!mapLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="text-gray-600">Loading map...</div>
        </div>
      )}
    </div>
  );
};

export default InteractiveMapMaptiler;
