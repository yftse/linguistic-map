
import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Language } from '@/types/language';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface LanguageListViewProps {
  languages: Language[];
  onLanguageClick: (language: Language) => void;
}

type SortField = 'name' | 'family' | 'speakers' | 'endangerment' | 'region';
type SortOrder = 'asc' | 'desc';

const LanguageListView: React.FC<LanguageListViewProps> = ({ languages, onLanguageClick }) => {
  const [sortField, setSortField] = useState<SortField>('name');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  const sortedLanguages = [...languages].sort((a, b) => {
    let aValue: string | number;
    let bValue: string | number;

    switch (sortField) {
      case 'speakers':
        aValue = a.speakers;
        bValue = b.speakers;
        break;
      case 'endangerment':
        const endangermentOrder = ['safe', 'vulnerable', 'definitely_endangered', 'severely_endangered', 'critically_endangered', 'extinct'];
        aValue = endangermentOrder.indexOf(a.endangermentStatus);
        bValue = endangermentOrder.indexOf(b.endangermentStatus);
        break;
      default:
        aValue = a[sortField].toLowerCase();
        bValue = b[sortField].toLowerCase();
    }

    if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;
    return 0;
  });

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) return null;
    return sortOrder === 'asc' ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />;
  };

  const getEndangermentColor = (status: string) => {
    const colors = {
      safe: 'text-green-600',
      vulnerable: 'text-yellow-600',
      definitely_endangered: 'text-orange-600',
      severely_endangered: 'text-red-600',
      critically_endangered: 'text-red-800',
      extinct: 'text-gray-600'
    };
    return colors[status as keyof typeof colors] || 'text-gray-600';
  };

  const formatSpeakers = (count: number) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              <Button
                variant="ghost"
                onClick={() => handleSort('name')}
                className="flex items-center gap-2 font-semibold"
              >
                Language <SortIcon field="name" />
              </Button>
            </TableHead>
            <TableHead>
              <Button
                variant="ghost"
                onClick={() => handleSort('family')}
                className="flex items-center gap-2 font-semibold"
              >
                Family <SortIcon field="family" />
              </Button>
            </TableHead>
            <TableHead>
              <Button
                variant="ghost"
                onClick={() => handleSort('speakers')}
                className="flex items-center gap-2 font-semibold"
              >
                Speakers <SortIcon field="speakers" />
              </Button>
            </TableHead>
            <TableHead>
              <Button
                variant="ghost"
                onClick={() => handleSort('endangerment')}
                className="flex items-center gap-2 font-semibold"
              >
                Status <SortIcon field="endangerment" />
              </Button>
            </TableHead>
            <TableHead>
              <Button
                variant="ghost"
                onClick={() => handleSort('region')}
                className="flex items-center gap-2 font-semibold"
              >
                Region <SortIcon field="region" />
              </Button>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedLanguages.map((language) => (
            <TableRow
              key={language.id}
              className="cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => onLanguageClick(language)}
            >
              <TableCell className="font-medium">{language.name}</TableCell>
              <TableCell>{language.family}</TableCell>
              <TableCell>{formatSpeakers(language.speakers)}</TableCell>
              <TableCell className={getEndangermentColor(language.endangermentStatus)}>
                {language.endangermentStatus.replace(/_/g, ' ')}
              </TableCell>
              <TableCell>{language.region}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default LanguageListView;
