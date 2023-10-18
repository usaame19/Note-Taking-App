"use client"
import React, { useEffect, useState } from 'react';
import Note from './Note';
import SearchNote from './Search/SearchNote'
import { getBaseUrl } from '../util/baseURL';


interface NoteData {
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  id: string;
}

const NotesList = () => {
  const baseURL = getBaseUrl()
  const [notes, setNotes] = useState<NoteData[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchNotes = async () => {
    try {
      const response = await fetch(`${baseURL}/api/post`);
      if (response.ok) {
        const data = await response.json();
        setNotes(data.reverse());
        setLoading(false); // Set loading to false when the fetch is successful
      } else {
        console.error('Failed to fetch notes');
        setLoading(false); // Set loading to false when the fetch fails
      }
    } catch (error) {
      console.error('Error fetching notes:', error);
      setLoading(false); // Set loading to false in case of an error
    }
  };

  useEffect(() => {
    // Fetch notes initially
    fetchNotes();

    // Polling interval in milliseconds (e.g., every 5 seconds)
    const pollingInterval = 5000;

    const intervalId = setInterval(() => {
      fetchNotes();
    }, pollingInterval);

    return () => {
      // Clear the interval when the component unmounts
      clearInterval(intervalId);
    };
  }, []);

  const filteredNotes = notes.filter((note) =>
  note.title.toLowerCase().includes(searchQuery.toLowerCase())
);
  return (
    <div className="w-1/4 p-4">
      <SearchNote searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="overflow-y-auto max-h-[calc(100vh-200px)]">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note) => (
            <div key={note.id}>
              <Note title={note.title} content={note.description} createdAt={note.createdAt} id={note.id} />
            </div>
          ))
        ) : (
          <h1>No notes found</h1>
        )}
      </div>
    </div>
  );
};

export default NotesList;
