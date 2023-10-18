'use client'
import React, { useTransition } from 'react';
import { IoMdTrash } from 'react-icons/io';
import { useRouter } from 'next/navigation';
import { getBaseUrl } from '../../util/baseURL';

const DeleteBtn = ({ id }: { id: string }) => {
  const baseURL = getBaseUrl()
    const [transition, startTransition] = useTransition();

    const router = useRouter();

    const handleDelete = async (id: string) => {
        

        const data = await fetch(`${baseURL}/api/post/${id}`, {
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
