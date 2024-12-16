"use client"

import {useState} from 'react'
import Link from 'next/link';
import { IoIosMenu, IoMdClose } from 'react-icons/io';


function ResponsiveHeader() {

    const [show, setShow] = useState(false)

  return (
    <div className="pl-10 md:hidden">
          <IoIosMenu onClick={()=>{setShow(true)}} className="scale-[2.5]"/>
          <div className={`${show && 'show'} fixed -left-full top-0 w-full h-full flex items-start justify-center transition-all [&.show]:translate-x-full`} >
            <div onClick={()=>{setShow(false)}} className="bg-transparent h-full w-2/12 flex items-start justify-center">
                <div className="">
                    <IoMdClose className="scale-[2.5]"/>
                </div>
            </div>
            <div className="bg-green-500 h-full grow flex flex-col items-center justify-start">
              <Link href='/'>Link1</Link>
              <Link href='/'>Link2</Link>
              <Link href='/'>Link3</Link>
            </div>
          </div>
        </div>
  )
}

export default ResponsiveHeader