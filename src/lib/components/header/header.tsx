"use client"
import React ,{useState,useRef,useEffect} from 'react'
import Link from 'next/link';
import HeaderLoginStatus from './headerLoginStatus';
import ThemeHandler from './themeHandler';
import ResponsiveHeader from './responsiveHeader';

import { IoMenu } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import { IoPerson } from "react-icons/io5";




function Header() {

  const searchRef = useRef(null)
  const [inputFocused, setInputFocused] = useState<boolean>(false)

  const [search, setSearch] = useState<string>("")

  const deleteSearch = (i)=>{
    if (typeof window === 'undefined') { return }
    const storage = localStorage.getItem('recent-searches')
    storage.splice(i,1)
    
    
    localStorage.setItem('recent-searches',storage)
  }

  const recentSearch = ()=>{
    if(typeof window === 'undefined'){ return}
      
    const storage = window.localStorage.getItem('recent-searches')

    if(!storage){ return } else {
      return <div className="w-full flex flex-col justify-start items-start gap-2">
                <h2 className="font-bold text-base">Recent Searches :</h2>
                <ul className="flex justify-start items-center gap-3 flex-wrap">
                  {JSON.parse(storage).map((item, index)=>{
                    return  <li 
                              key={index}
                              className="px-3 py-2 flex items-center justify-center gap-1 bg-gray-300 rounded-3xl text-sm"
                            >
                              <Link href={`/?search=${item}`}>{item}</Link>
                              <IoMdClose 
                                onClick={()=>deleteSearch(index)}
                                className="transition-all hover:scale-125 cursor-pointer"
                              />
                            </li>
                  })}
                </ul>
              </div>
    }
  }
  
  const handleSearch = ()=>{
    if (!search){
      return;
    }
    
    localStorage.setItem('recent-searches',search)
    setSearch("")
  }
  
  return (
    <header className="fixed w-full h-16 px-10 flex justify-between bg-white shadow-md">
        <div className="h-full w-1/3 lg:w-1/5 bg-yellow-300 text-black text-3xl font-bold flex justify-center items-center rounded-xl">Nearly</div>
        <div className="group grow relative flex justify-center items-center px-6">
          <input 
            type="text" 
            ref={searchRef} 
            placeholder="Search..." 
            onFocus={()=>setInputFocused(true)}
            onBlur={()=>setInputFocused(false)}
            value={search} 
            onChange={e=>setSearch(e.target.value)} 
            className="w-full h-3/4 rounded-3xl text-foreground px-6 text-black text-lg outline-none bg-gray-100 transition-colors group-hover:bg-gray-200 focus:bg-gray-200"
          />
          <button 
            onClick={()=>handleSearch()}
            className="absolute flex justify-center items-center right-10 top-1/2 -translate-y-1/2 w-10 h-3/4 rounded-full transition-colors hover:text-yellow-500"
            >
              <FaSearch />
          </button>
          <button 
            onClick={()=>{setSearch("")}}
            className={`absolute right-24 top-1/2 -translate-y-1/2 text-black ${search === "" && "hidden"}`}
          >
            <IoMdClose className="scale-150"/>
          </button>
          <div className={`absolute left-0 top-[102%] w-full h-96 mx-6 p-5 flex flex-col justify-start items-start bg-white shadow-md rounded transition-all ${inputFocused && "translate-y-3 opacity-70 invisible"}`}
          >
            {
              recentSearch()
            }
          </div>
        </div>
        <div className="h-full w-fit flex justify-center items-center gap-5 ml-10">
          <Link 
            href="/login"
            className="scale-150 cursor-pointer"
          >
            <IoPerson />
          </Link>
          <Link 
            href="/add-offer"
            className="flex justify-center items-center g-5 bg-yellow-300 h-3/4 px-5 rounded-3xl border border-black transition-colors cursor-pointer hover:bg-yellow-400"
          >
            Add an Offer 
            <IoMdAdd />
          </Link>
        </div>
        <div className="flex justify-center items-center scale-[2] px-5 ml-10 cursor-pointer"><IoMenu /></div>
    </header>
  )
}

export default Header