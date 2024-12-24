"use client"
import React ,{useState,useRef,useEffect} from 'react'
import Link from 'next/link';
import { useRouter,useSearchParams} from 'next/navigation';

import HeaderLoginStatus from './headerLoginStatus';
import ThemeHandler from './themeHandler';
import ResponsiveHeader from './responsiveHeader';
import SearchBar from './searchBar';

import { IoMenu } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { IoPerson } from "react-icons/io5";





function Header() {

  
  

  
  return (
    <header className="fixed w-full h-16 px-10 flex justify-between bg-white shadow-md">
        <div className="h-full w-1/3 lg:w-1/5 bg-yellow-300 text-black text-3xl font-bold flex justify-center items-center rounded-xl">Nearly</div>
        <SearchBar />
        <div className="h-full w-fit flex justify-center items-center gap-5 ml-10">
          <Link 
            href="/login"
            className="scale-150 cursor-pointer"
          >
            <IoPerson />
          </Link>
          <Link 
            href="/add-offer"
            className="flex justify-center items-center g-5 bg-yellow-300 h-3/4 px-5 rounded-3xl border border-black transition-colors text-nowrap cursor-pointer hover:bg-yellow-400"
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