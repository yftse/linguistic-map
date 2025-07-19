
import React, { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import InteractiveMapMaptiler from '@/components/InteractiveMapMaptiler';
import FilterDropdown from '@/components/FilterDropdown';
import SearchBar from '@/components/SearchBar';
import LanguageListView from '@/components/LanguageListView';
import LanguageDetail from '@/components/LanguageDetail';
import { allLanguages, classificationFilters } from '@/data/allLanguages';
import { Language, FilterType } from '@/types/language';
import { Menu, Map } from 'lucide-react';

const Index = () => {
  const [selectedFilter, setSelectedFilter] = useState<FilterType>('family');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isListView, setIsListView] = useState<boolean>(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(null);

  // Filter languages based on search query
  const filteredLanguages = useMemo(() => {
    if (!searchQuery.trim()) return allLanguages;
    
    const query = searchQuery.toLowerCase();
    return allLanguages.filter(lang =>
      lang.name.toLowerCase().includes(query) ||
      lang.family.toLowerCase().includes(query) ||
      lang.branch.toLowerCase().includes(query) ||
      lang.region.toLowerCase().includes(query) ||
      lang.alternativeNames.some(name => name.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  const handleLanguageClick = (language: Language) => {
    setSelectedLanguage(language);
  };

  const handleBackToMap = () => {
    setSelectedLanguage(null);
  };

  // Show language detail if a language is selected
  if (selectedLanguage) {
    return <LanguageDetail language={selectedLanguage} onBack={handleBackToMap} />;
  }

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 p-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-gray-900">LinguaMap - Maptiler Version</h1>
            <Badge variant="secondary" className="hidden sm:inline-flex">
              {filteredLanguages.length} languages
            </Badge>
          </div>
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <SearchBar 
              onSearch={setSearchQuery}
              placeholder="Search languages, families, regions..."
            />
            <FilterDropdown
              filters={classificationFilters}
              selectedFilter={selectedFilter}
              onFilterChange={setSelectedFilter}
            />
            <Button
              variant={isListView ? "default" : "outline"}
              onClick={() => setIsListView(!isListView)}
              className="flex items-center gap-2 whitespace-nowrap"
            >
              {isListView ? <Map className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              {isListView ? 'Map View' : 'List View'}
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 relative overflow-hidden">
        {isListView ? (
          <div className="h-full overflow-auto p-4">
            <LanguageListView 
              languages={filteredLanguages}
              onLanguageClick={handleLanguageClick}
            />
          </div>
        ) : (
          <div className="h-full relative">
            <InteractiveMapMaptiler
              languages={filteredLanguages}
              selectedFilter={selectedFilter}
              onLanguageClick={handleLanguageClick}
            />
            
            {/* Map Legend */}
            <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg max-w-xs">
              <h3 className="font-semibold mb-2">
                {classificationFilters.find(f => f.id === selectedFilter)?.name}
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                {classificationFilters.find(f => f.id === selectedFilter)?.description}
              </p>
              <div className="text-xs text-gray-500">
                Click on language areas to explore details • Overlapping regions show multiple languages
              </div>
            </div>

            {/* Search Results Indicator */}
            {searchQuery && (
              <div className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-lg">
                <p className="text-sm">
                  <strong>{filteredLanguages.length}</strong> languages match "{searchQuery}"
                </p>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
