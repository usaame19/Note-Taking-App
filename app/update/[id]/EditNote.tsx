import React from 'react'
import NotesList from '../../components/NotesList'
import UpdateNote from './Update-note'
const EditNote = () => {
  return (
    <div>
        <div className="flex h-screen">
      <NotesList  />
      <UpdateNote />
      </div>
    </div>
  )
}

export default EditNote
