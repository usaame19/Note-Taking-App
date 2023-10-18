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
  return (
    <div className="p-4 border border-gray-200 mb-4 rounded-md">
      <Link href={`/update/${id}`}>
        <h3 className="font-semibold mb-2">{title}</h3>
        <p>{content}</p>
        {createdAt && (
          <div className="mt-2 text-gray-600 flex items-center">
            <IoMdTime className="mr-1" />
            <span className="text-xs">
              {new Date(createdAt).toLocaleString()} {/* Format and display the creation time */}
            </span>
          </div>
        )}
      </Link>
    </div>
  );
};

export default Note;
