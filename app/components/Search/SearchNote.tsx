import React from 'react';

interface SearchNoteProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchNote: React.FC<SearchNoteProps> = ({ searchQuery, setSearchQuery }) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search notes"
      className="w-full p-2 border border-gray-200 rounded-md mb-4"
      value={searchQuery}
      onChange={handleSearch}
    />
  );
};

export default SearchNote;
