
# LinguaMap - Mapbox Version

This is the Mapbox GL JS implementation of the LinguaMap interactive language visualization.

## Features

- Interactive map with overlapping language regions
- Multiple classification filters (Language Family, Individual Language, etc.)
- Realistic geographic coverage areas
- Click interaction to explore language details

## Setup

1. Replace the Mapbox access token in the configuration files
2. Install dependencies: `npm install`
3. Run development server: `npm run dev`

## Key Files

- `src/components/InteractiveMapMapbox.tsx` - Main map component
- `src/utils/mapboxConfig.ts` - Map configuration
- `src/utils/mapLayerManager.ts` - Layer management utilities
- `src/data/allLanguages.ts` - Language data with geographic areas

## Customization

To modify the painted language areas:
1. Edit the `geographicArea` property in language objects
2. Adjust color schemes in `src/utils/enhancedColorSchemes.ts`
3. Modify layer styling in `mapLayerManager.ts`
