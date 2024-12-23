"use client"

import React from 'react'
import Image from 'next/image';

function UserDashboard() {

  const category = [
    {
      name:'small packages',
      avatar:'',
      link:'/dashboard/courriers'
    },
    {
      name:'transport marchandise',
      avatar:'',
      link:''
    },
    {
      name:'rental of equipment',
      avatar:'',
      link:''
    },
    {
      name:'services',
      avatar:'',
      link:''
    },
    {
      name:'subcontractor',
      avatar:'',
      link:''
    },
  ]
  return (
    <>
      <div className="h-[100vh] w-full flex flex-col justify-start items-center bg-background">
        <div>
          <input type="text" />
          <button>filter</button>
        </div>
        <div className="w-full bg-red-300 flex justify-evenly items-center">
          {category.map(cat => {
            return ( <a key={cat.name} href={cat.link} className="flex flex-col gap-3 justify-center items-center cursor-pointer">
              <Image src={cat.avatar || null} alt={cat.name} height={100} width={100} className="rounded-full bg-blue-300 aspect-square" />
              <h1>{cat.name}</h1>
            </a> )
          })}
        </div>
      </div>
    </>
  )
}

export default UserDashboard