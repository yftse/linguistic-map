
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Map } from 'lucide-react';
import { Language } from '@/types/language';

interface LanguageDetailProps {
  language: Language;
  onBack: () => void;
}

const LanguageDetail: React.FC<LanguageDetailProps> = ({ language, onBack }) => {
  const getEndangermentColor = (status: string) => {
    const colors = {
      safe: 'bg-green-100 text-green-800',
      vulnerable: 'bg-yellow-100 text-yellow-800',
      definitely_endangered: 'bg-orange-100 text-orange-800',
      severely_endangered: 'bg-red-100 text-red-800',
      critically_endangered: 'bg-red-200 text-red-900',
      extinct: 'bg-gray-100 text-gray-800'
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const formatSpeakers = (count: number) => {
    return count.toLocaleString();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <Button
          onClick={onBack}
          variant="outline"
          className="mb-6 flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Map
        </Button>

        <div className="space-y-6">
          {/* Header */}
          <Card>
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <CardTitle className="text-3xl">{language.name}</CardTitle>
                  <p className="text-lg text-gray-600 mt-2">
                    {language.family} → {language.branch}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className={getEndangermentColor(language.endangermentStatus)}>
                    {language.endangermentStatus.replace(/_/g, ' ')}
                  </Badge>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Map className="h-5 w-5" />
                  Geographic Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <strong>Region:</strong> {language.region}
                </div>
                <div>
                  <strong>Country:</strong> {language.country}
                </div>
                <div>
                  <strong>Coordinates:</strong> {language.coordinates[1].toFixed(4)}, {language.coordinates[0].toFixed(4)}
                </div>
                {language.alternativeNames.length > 0 && (
                  <div>
                    <strong>Alternative Names:</strong> {language.alternativeNames.join(', ')}
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Language Vitality</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <strong>Speakers:</strong> {formatSpeakers(language.speakers)}
                </div>
                <div>
                  <strong>Status:</strong>{' '}
                  <Badge className={getEndangermentColor(language.endangermentStatus)}>
                    {language.endangermentStatus.replace(/_/g, ' ')}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Writing System */}
          <Card>
            <CardHeader>
              <CardTitle>Writing System</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <strong>Script:</strong> {language.script}
              </div>
              {language.alphabet && (
                <div>
                  <strong>Alphabet/Characters:</strong>
                  <div className="mt-2 p-3 bg-gray-50 rounded-md font-mono text-sm">
                    {language.alphabet}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Phonological Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Consonants</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {language.consonants.map((consonant, index) => (
                    <Badge key={index} variant="outline" className="font-mono">
                      {consonant}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Vowels</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {language.vowels.map((vowel, index) => (
                    <Badge key={index} variant="outline" className="font-mono">
                      {vowel}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Grammatical Features */}
          <Card>
            <CardHeader>
              <CardTitle>Grammatical Features</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <strong>Syntax Features:</strong>
                <div className="flex flex-wrap gap-2 mt-2">
                  {language.syntaxFeatures.map((feature, index) => (
                    <Badge key={index} variant="secondary">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
              <Separator />
              <div>
                <strong>Grammar Notes:</strong>
                <p className="mt-2 text-gray-700 leading-relaxed">
                  {language.grammarNotes}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Audio Section Placeholder */}
          <Card>
            <CardHeader>
              <CardTitle>Audio Samples</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-gray-500">
                <p>Audio recordings will be available soon.</p>
                <p className="text-sm mt-2">Native speaker samples coming in the next update.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LanguageDetail;
