
# LinguaMap - Maptiler Version

This is the Maptiler implementation of the LinguaMap interactive language visualization.

## Features

- Interactive map with overlapping language regions using Maptiler tiles
- Multiple classification filters (Language Family, Individual Language, etc.)
- Realistic geographic coverage areas without ocean painting
- Enhanced color schemes for all language families
- European and Central Asian minority languages included

## Setup

1. The Maptiler API key is already configured
2. Install dependencies: `npm install`
3. Run development server: `npm run dev`

## Key Files

- `src/components/InteractiveMapMaptiler.tsx` - Main map component
- `src/utils/maptilerConfig.ts` - Map configuration
- `src/utils/mapLayerManager.ts` - Layer management utilities
- `src/data/allLanguages.ts` - Combined language data
- `src/data/europeanLanguages.ts` - European and Central Asian languages

## Customization

To modify the painted language areas:
1. Edit the `geographicArea` property in language objects in `src/data/`
2. Adjust color schemes in `src/utils/enhancedColorSchemes.ts`
3. Modify layer styling in `mapLayerManager.ts`

## Language Coverage

Includes languages from:
- Major world languages (Spanish, Mandarin, Arabic, etc.)
- European minority languages (Frisian, Sami, Romansch)
- Caucasian languages (Chechen, Kalmyk)
- Central Asian Turkic languages (Kazakh, Uzbek, Kyrgyz)

## Color Coding

Different colors represent:
- **Language Family**: Groups by major linguistic families
- **Individual Language**: Each language has its own color
- **Branch**: Sub-classifications within families
- **Endangerment**: Conservation status color coding
- **Region**: Geographic region groupings
