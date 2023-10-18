"use client"
import React, { useState, useEffect } from 'react';
import { IoMdCreate } from 'react-icons/io';
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import DeleteBtn from '../../components/delete/Delete'
import { getBaseUrl } from '../../util/baseURL';


 

const UpdateNote = () => {
  const baseURL = getBaseUrl()
  const params = useParams();
  const router = useRouter();
  const { id } = params; 

  const [noteData, setNoteData] = useState({
    title: '',
    description: '',
  });

  useEffect(() => {
    if (id) {
      
      fetch(`${baseURL}/api/post/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setNoteData({
            title: data.title,
            description: data.description,
          });
        })
        .catch((error) => {
          console.error('Error fetching note data:', error);
        });
    }
  }, [id]);

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setNoteData({ ...noteData, [name]: value });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      const response = await fetch(`${baseURL}/api/post/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(noteData),
      });

      // Handle the response as needed
    } catch (error) {
      console.error('Error updating note:', error);
    }
  };

  return (
    <div className="w-full p-4 md:w-3/4 md:p-4">
      <div className="flex justify-around items-center mb-4">
      <DeleteBtn id={Array.isArray(id) ? id[0] : id as string} />

        <button  onClick={() => router.push('/')} className="text-indigo-500 flex">
          <IoMdCreate className="m-1" /> Create Note
        </button>
      </div>
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

export default UpdateNote;
