import React from 'react'
import Image from 'next/image';

function Page() {

    const subCategory = [
        {
            name:'documents',
            avatar:'',
            link:''
        },
        {
            name:'packages',
            avatar:'',
            link:''
        },
        {
            name:'remote purchase',
            avatar:'',
            link:''
        },
    ]
  return (
    <div className="h-[100vh] w-full flex flex-col justify-start items-center bg-background">
        <h1>packages</h1>
        <div className="w-full bg-red-300 flex justify-evenly items-center">
            {subCategory.map((item, index) => (
                <a key={index} href={item.link} className="flex flex-col gap-3 justify-center items-center cursor-pointer">
                    <Image src={item.avatar} alt={item.name} height={100} width={100} className="rounded-full bg-blue-300 aspect-square"/>
                    <h2>{item.name}</h2>
                </a> ))}
        </div>
        <div className="recommended">recommended</div>
        <div className="offers">offers</div>
    </div>
  )
}

export default Page