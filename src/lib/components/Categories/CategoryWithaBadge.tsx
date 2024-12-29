import React from 'react'
import Link from 'next/link';

function CategoryWithaBadge({category,count,search}) {
  return (
    <Link 
        href={`/search?category=${category}&value=${search}`}
        className={`relative h-24 w-24 bg-yellow-300 rounded-full flex justify-center items-center font-bold`}
    >
        <div>
            {category}
        </div>
        <div 
            className="absolute bg-red-500 bottom-0 -right-0 w-fit h-6 px-3 py-1 rounded-full border-2 border-white text-white flex justify-center items-center font-bold"
        >
            {count}
        </div>
    </Link>
  )
}

export default CategoryWithaBadge