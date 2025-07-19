
import maplibregl from 'maplibre-gl';

export const createMaptilerMap = (container: HTMLDivElement): maplibregl.Map => {
  return new maplibregl.Map({
    container,
    style: 'https://api.maptiler.com/maps/streets-v2/style.json?key=gyNfeRRGKgZuqBD5plxn',
    center: [0, 20],
    zoom: 2
  });
};

export const addNavigationControl = (map: maplibregl.Map): void => {
  map.addControl(new maplibregl.NavigationControl(), 'top-right');
};
