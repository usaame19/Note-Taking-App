import Link from 'next/link';
import React from 'react';
import { IoMdTime } from 'react-icons/io';

interface NoteProps {
  title: string;
  content: string;
  createdAt: string;
  id: string;
}

const Note: React.FC<NoteProps> = ({ title, content, createdAt, id }) => {
  // Function to truncate text to the first 15 words
  const truncateText = (text: string, maxWords: number) => {
    const words = text.split(' ');
    return words.slice(0, maxWords).join(' ');
  };

  const truncatedTitle = truncateText(title, 9);
  const truncatedContent = truncateText(content, 9);

  return (
    <div className="p-4 border border-gray-200 mb-4 rounded-md">
      <Link href={`/update/${id}`}>
        <h3 className="font-semibold mb-2">{truncatedTitle}</h3>
        <p>{truncatedContent}<span className='font-bold'>...</span></p>
        {createdAt && (
          <div className="mt-2 text-gray-600 flex items-center">
            <IoMdTime className="mr-1" />
            <span className="text-xs">
              {new Date(createdAt).toLocaleString()}
            </span>
          </div>
        )}
      </Link>
    </div>
  );
};

export default Note;
