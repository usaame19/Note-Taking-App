import Link from 'next/link';
import React from 'react';
import { FaPlus } from 'react-icons/fa';

interface SearchNoteProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchNote: React.FC<SearchNoteProps> = ({ searchQuery, setSearchQuery }) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <div className="flex justify-end sm:hidden">
        <Link href="/create-note" passHref>
          <div className="text-indigo-500 flex">
            <div className="mt-1">
              <FaPlus size={16} />
            </div>
            Create Note
          </div>
        </Link>
      </div>
      <input
        type="text"
        placeholder="Search notes"
        className="w-full p-2 border border-gray-200 rounded-md mb-4"
        value={searchQuery}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchNote;
