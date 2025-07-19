
import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ClassificationFilter, FilterType } from '@/types/language';

interface FilterDropdownProps {
  filters: ClassificationFilter[];
  selectedFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({
  filters,
  selectedFilter,
  onFilterChange
}) => {
  return (
    <Select value={selectedFilter} onValueChange={(value) => onFilterChange(value as FilterType)}>
      <SelectTrigger className="w-64 bg-white border-gray-300">
        <SelectValue placeholder="Select classification..." />
      </SelectTrigger>
      <SelectContent className="bg-white border border-gray-200 shadow-lg">
        {filters.map((filter) => (
          <SelectItem key={filter.id} value={filter.id} className="hover:bg-gray-50">
            <div>
              <div className="font-medium">{filter.name}</div>
              <div className="text-sm text-gray-500">{filter.description}</div>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default FilterDropdown;
