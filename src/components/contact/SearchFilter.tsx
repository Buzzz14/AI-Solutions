import React from 'react';
import { Search } from 'lucide-react';

interface SearchFilterProps {
  search: string;
  filter: string;
  onSearchChange: (value: string) => void;
  onFilterChange: (value: string) => void;
}

const SearchFilter: React.FC<SearchFilterProps> = ({
  search,
  filter,
  onSearchChange,
  onFilterChange,
}) => {
  return (
    <div className="flex gap-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="text"
          placeholder="Search inquiries..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <select
        value={filter}
        onChange={(e) => onFilterChange(e.target.value)}
        className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="all">All Status</option>
        <option value="new">New</option>
        <option value="read">Read</option>
        <option value="responded">Responded</option>
      </select>
    </div>
  );
};

export default SearchFilter;