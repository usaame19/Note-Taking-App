'use client'

import React, { useTransition } from 'react';
import { IoMdTrash } from 'react-icons/io';
import { useRouter } from 'next/navigation';
const DeleteBtn = ({ id }) => {

    const [transition, startTransition] = useTransition();

    const router = useRouter();

    const handleDelete = async (id) => {
        

        const data = await fetch(`http://localhost:3000/api/post/${id}`, {
            method: 'DELETE'
        });
        startTransition(() => {
          router.push('/');
        });
    };


  return (
    <button
    onClick={() => handleDelete(id)}
     className="mr-2 text-red-500 text-lg"
     type='submit'>
          <IoMdTrash />
        </button>
  )
}

export default DeleteBtn
