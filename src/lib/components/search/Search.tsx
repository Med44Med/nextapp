"use client"
import {useState,useEffect} from 'react'


import {generateWilayas} from "../../assets/Communes.js"


import { FaExchangeAlt } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import TransportForm from './forms/TransportForm';
import Rent from './forms/Rent';



function Search() {

    const styleType = "grow bg-[rgba(0,0,0,0.6)]  backdrop-blur-md transition-all flex justify-center items-center py-6 text-white font-bold text-xl select-none cursor-pointer border border-[rgba(255,255,255,0.2)] hover:border-[rgba(255,255,255,0.8)] [&.active]:border-[rgba(255,255,255,0.8)]"
    
    const wilayas = generateWilayas()
    

    
    
    
    
    const [typeSelect, setTypeSelect] = useState('rent') // transport - rent - services - subcontractor
    

    //transport Form
    
    


    const handleWitchForm = () => {
      switch (typeSelect) {
        case 'transport':  return <TransportForm />
        case 'rent':  return <Rent />
      
        default: return null
          
      }
    }


    
    
   
    
    return (
    <div className="w-full flex flex-col justify-start items-center gap-3 z-10">
      <div className="w-full flex">
        <div onClick={()=>setTypeSelect("transport")} className={`${styleType} ${typeSelect === "transport" ? "active":""} rounded-tl-xl rounded-bl-xl `}>
            Transport
        </div>
        <div onClick={()=>setTypeSelect("rent")} className={`${styleType} ${typeSelect === "rent" ? "active":""}`}>
            Rent
        </div>
        <div onClick={()=>setTypeSelect("services")} className={`${styleType} ${typeSelect === "services" ? "active":""}`}>
            Services
        </div>
        <div onClick={()=>setTypeSelect("subcontractor")} className={`${styleType} ${typeSelect === "subcontractor" ? "active":""} rounded-tr-xl rounded-br-xl` }>
            Subcontractor
        </div>
      </div>
      <div className="bg-white w-full rounded-xl py-10 shadow-xl">
        {
          handleWitchForm()
        }
      </div>
    </div>
  );
}

export default Search