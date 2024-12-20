"use client"

import {useState} from 'react'
import Link from 'next/link';
import { IoIosMenu, IoMdClose } from 'react-icons/io';


function ResponsiveHeader({mainLinks}) {

    const [show, setShow] = useState(false)
    console.log(mainLinks);
    
  return (
    <div className="pl-10 md:hidden">
      <IoIosMenu
        onClick={() => {
          setShow(true);
        }}
        className="scale-[2.5] text-background"
      />
      <div className={`${show && "show"} fixed -left-full top-0 w-full h-full flex items-start justify-center transition-all [&.show]:translate-x-full`}>
        <div
          onClick={() => {setShow(false);}}
          className="bg-[rgba(0,0,0,.4)] h-full w-2/12 flex items-start justify-center"
        >
          <div className="relative bg-background w-full h-20 flex justify-center items-center after:content-[''] after:absolute after:top-full after:left-0 after:bg-transparent after:w-10 after:h-10 after:rounded-tl-full after:shadow-[-21px_-21px_0px_20px_#ff0000] after:shadow-background ">
            <IoMdClose className="scale-[2.5] text-foreground z-20" />
          </div>
        </div>
        <div className="bg-background h-full grow flex flex-col items-center justify-start gap-10 py-20 rounded-bl-xl">
          {mainLinks.map(link => { 
            return <Link key={link.name} href={link.link} className="font-bold font-main text-xl w-10/12 text-center py-3 border-b border-foreground after:content-['']">{link.name}</Link>
          })}
        </div>
      </div>
    </div>
  );
}

export default ResponsiveHeader