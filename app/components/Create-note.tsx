"use client"
import React, { useState } from 'react';

const CreateNote = () => {
  const [noteData, setNoteData] = useState({
    title: '',
    description: '',
  });

  const [error, setError] = useState('');
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (!noteData.title || !noteData.description) {
      setError('Title and content are required');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(noteData),
      });

      if (response.ok) {
        setNoteData({ title: '', description: '' });
      } else {
        console.error('Failed to create a new note');
      }
    } catch (error) {
      console.error('Error creating a new note:', error);
    }
  };

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setNoteData({ ...noteData, [name]: value });
  };

  return (
    <div className="w-3/4 p-4">
     
      <div className="border border-gray-200 rounded-md p-4 h-full">
        <form onSubmit={handleSubmit}>
          <label htmlFor="title" className="block font-semibold text-sm mb-1">
            Title:
          </label>
          <input
            id="title"
            name="title"
            type="text"
            value={noteData.title}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-200 rounded-md mb-4 focus:outline-none"
            placeholder="Enter title"
            autoFocus
          />
          <label htmlFor="description" className="block font-semibold text-sm mb-1">
            Content:
          </label>
          <textarea
            id="description"
            name="description"
            value={noteData.description}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-200 rounded-md focus:outline-none"
            placeholder="Enter content"
            rows={8}
          />
          <button type="submit" className="text-indigo-500 mt-4">
            Save Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateNote;
