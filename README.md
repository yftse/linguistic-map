
# Linguistic Map - Interactive Language Visualisation

An interactive web application for visualising world languages and their geographic distributions using both Maptiler mapping services (Mapbox also available).

## Features

- **Interactive Language Maps**: Visualise language distributions with realistic geographic coverage
- **Overlapping Regions**: See where multiple languages are spoken in the same area
- **Multiple Classification Systems**: Filter by language family, individual languages, endangerment status, and more
- **Comprehensive Language Data**: Includes major world languages plus European and Central Asian minority languages
- **Dual Map Providers**: Compare Mapbox and Maptiler implementations

## Language Coverage


### Major World Languages
- Spanish, French, Portuguese, Mandarin Chinese, Arabic, Japanese...

### European Minority Languages
- West Frisian, Northern Sami, Romansch

### Caucasian Languages
- Chechen, Kalmyk

### Central Asian Languages
- Kazakh, Uzbek, Kyrgyz

## Map Versions

### Maptiler Version (Current)
- Uses Maptiler tiles and API
- Enhanced color schemes for all classification systems
- No ocean area painting
- Comprehensive European and Central Asian language coverage

### Mapbox Version (Alternative)
Located in `mapbox-version/` directory
- Uses Mapbox GL JS
- Same feature set with Mapbox styling
- Requires Mapbox access token

## Comparing Results

1. **Current Implementation**: The main application uses Maptiler
2. **Switch to Mapbox**: Use the version in `mapbox-version/` directory
3. **Visual Differences**: 
   - Maptiler uses vector tiles with different styling
   - Mapbox offers satellite and terrain overlays
   - Color rendering may vary between providers

## Customising Painted Areas

### Modifying Language Regions
1. Edit `src/data/mockLanguages.ts` or `src/data/europeanLanguages.ts`
2. Update the `geographicArea` property with polygon coordinates:
   ```typescript
   geographicArea: [
     [[longitude1, latitude1], [longitude2, latitude2], ...],
     // Multiple polygons for non-contiguous areas
   ]
   ```

### Adjusting Color Schemes
1. Edit `src/utils/enhancedColorSchemes.ts`
2. Modify colors for each classification:
   ```typescript
   family: {
     'Indo-European': '#3B82F6',
     'Sino-Tibetan': '#EF4444',
     // Add more families...
   }
   ```

### Adding New Languages
1. Add language objects to appropriate data files
2. Include all required properties:
   - Basic info (name, family, speakers)
   - Geographic area coordinates
   - Linguistic features (phonemes, syntax)
   - Classification metadata

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── components/          # React components
├── data/               # Language data files
├── utils/              # Utility functions and configurations
├── types/              # TypeScript type definitions
└── pages/              # Application pages
```

## Technologies

- React + TypeScript
- Mapbox GL JS / Maptiler SDK
- Tailwind CSS
- Vite

## Contributing

When adding new languages or regions:
1. Ensure geographic accuracy
2. Include proper linguistic classification
3. Add appropriate color coding
4. Test overlapping regions functionality
5. Update documentation

## License

MIT License - see LICENSE file for details
