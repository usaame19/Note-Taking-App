import React from 'react'
import NotesList from './NotesList'
import CreateNote from './Create-note'

const AllNotes = () => {
  return (
    <div>
        <div className="flex h-screen">
      <NotesList  />
      <CreateNote />
      </div>
    </div>
  )
}

export default AllNotes
