'use client'
import React, { useEffect, useState } from 'react';
import NotesList from '../../components/NotesList';
import UpdateNote from './Update-note';

const EditNote = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check if the screen width is below a certain threshold (e.g., 768px for mobile)
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Call it once to set the initial state
    handleResize();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <div className="flex h-screen">
        {isMobile ? null : <NotesList />}
        <UpdateNote />
      </div>
    </div>
  );
};

export default EditNote;
