"use client"
import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';


function EmptySearch({params}) {

  const router = useRouter()

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4">
      <h1>Search results</h1>
      <p>{`No results found for "${params.value}"`}</p>
      <div className="flex justify-center items-center gap-3">
        <button onClick={router.back} className="px-6 py-3 bg-yellow-300 border-2 border-foreground rounded-3xl">Back</button>
        <Link href="/" className="px-6 py-3 bg-yellow-300 border-2 border-foreground rounded-3xl">Clear search</Link>
      </div>
    </div>
  )
}

export default EmptySearch