"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Card({card}) {
  const router = useRouter();
  return (
    <div  onClick={()=>{router.push(`/${card.title}`)}} className="w-80 h-96 rounded bg-white shadow-md p-3 flex flex-col justify-start items-start gap-2 cursor-pointer">
        <Image src={null} alt={card.title} height={200} width={300} className="bg-yellow-100 h-1/2 w-full rounded-md" />
        <div className="overflow-hidden w-full grow flex flex-col gap-1">
          <h1 className="font-bold text-lg w-full cursor-pointer">
            {card.title}
          </h1>
          <p className="text-sm w-11/12 text-gray-600">
            {card.content}
          </p>
          <div className="flex justify-start items-end gap-3 mt-auto">
            <div className="grow flex flex-col justify-start items-start gap-1">
              <Link href='/' className="font-bold text-black hover:underline">{card.author}</Link>
              <Link href='/' className="text-sm hover:underline">{card.category}</Link>
            </div>
            <div className="grow flex justify-end items-center gap-1">
              <Link href={`tel:${card.tel}`} className="px-3 py-1 bg-yellow-300 rounded-lg font-bold border border-gray-200 shadow-sm transition-colors hover:bg-yellow-400 flex justify-center items-center gap-2 text-nowrap">Call</Link>
              <Link href={`/offers/${card.title}`} className="px-3 py-1 bg-yellow-300 rounded-lg font-bold border border-gray-200 shadow-sm transition-colors hover:bg-yellow-400 flex justify-center items-center gap-2 text-nowrap">More info</Link>
            </div>
          </div>
        </div>
    </div>
  )
}
