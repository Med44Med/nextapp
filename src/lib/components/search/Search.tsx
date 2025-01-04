"use client"
import {useState,useEffect} from 'react'


import {communes,generateWilayas} from "../../assets/Communes.js"


import { FaExchangeAlt } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";



function Search() {

    const styleType = "grow bg-[rgba(0,0,0,0.6)]  backdrop-blur-md transition-all flex justify-center items-center py-6 text-white font-bold text-xl select-none cursor-pointer border border-[rgba(255,255,255,0.2)] hover:border-[rgba(255,255,255,0.8)] [&.active]:border-[rgba(255,255,255,0.8)]"
    
    const wilayas = generateWilayas()
    console.log(wilayas[0]);
    

    
    
    
    
    const [typeSelect, setTypeSelect] = useState('transport') // transport - rent - services - subcontractor
    
    const [fromList, setFromList] = useState([]) 
    const [toList, setToList] = useState([]) 
    
    const handleInput = (e)=>{
      setData(perv=>({...perv,[e.target.name]:e.target.value}))
    }

    
    
    const [data, setData] = useState({
      type:'transport',
      packageType:'',
      from:'',
      to:'',
      maxDate:null
    })
    
    useEffect(() => {
      if (data.from.length > 0) {
        
        const arr = wilayas.filter(item => item.name.toLowerCase() === data.from.toLowerCase())
        
        if (arr.length === 0) {
          const filtered = wilayas.filter(item => item.name.toLowerCase().includes(data.from.toLowerCase()))
          setFromList(filtered)
        }
      }
    }, [data.from])
    
    useEffect(() => {
      if (data.to.length > 0) {
        
        const arr = wilayas.filter(item => item.name.toLowerCase() === data.to.toLowerCase())
        
        if (arr.length === 0) {
          const filtered = wilayas.filter(item => item.name.toLowerCase().includes(data.from.toLowerCase()))
          setFromList(filtered)
        }
      }
    }, [data.to])
    
   
    
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
        <form className="flex items-center gap-5 px-5 h-full">
          <div className="grow h-full py-6 pr-10 border-r border-gray-300">
            <select name="type" value={data.packageType} onChange={e=>setData(perv =>({...perv,packageType:e.target.value}))} className='outline-none w-full text-xl text-gray-700 cursor-pointer'>
              <option value="">Select a type</option>
              <option value="paper">Paper</option>
              <option value="box">Box</option>
            </select>
          </div>
          <div className="relative grow flex flex-col justify-center items-start gap-3">
            <label className="uppercase font-bold text-sm">From</label>
            <input type="text" name="from" value={data.from} onChange={e=>handleInput(e)} spellCheck="false" placeholder="Search" className="outline-none text-2xl"/>
            {fromList.length>0 && <div className="absolute bottom-full left-0 w-full h-36 overflow-y-auto bg-white rounded-xl">
              {fromList.map(e=>
                <div 
                  key={e.id}
                  onClick={
                    () => {
                      setData(perv =>({...perv,from:e.name}))
                      setFromList([])
                      }
                  } 
                  className="h-12 p-3 cursor-pointer"
                >
                  {e.name}
                </div>
              )}
            </div>}
          </div>
          <div className="rounded-full border mx-3 w-10 h-10 flex justify-center items-center cursor-pointer transition-all hover:text-yellow-300 hover:border-yellow-300">
            <FaExchangeAlt className="text-xl"/>
          </div>
          <div className="relative grow flex flex-col justify-center items-start gap-3">
            <label className="uppercase font-bold text-sm">To</label>
            <input type="text" name="to" placeholder="Search" value={data.to} onChange={e=>handleInput(e)} className="outline-none text-2xl"/>
            {toList.length>0 && <div className="absolute bottom-full left-0 w-full h-36 overflow-y-auto bg-white rounded-xl">
              {toList.map(e=>
                <div 
                  key={e.id}
                  onClick={
                    () => {
                      setData(perv =>({...perv,to:e.name}))
                      setToList([])
                      }
                  } 
                  className="h-12 p-3 cursor-pointer"
                >
                  {e.name}
                </div>
              )}
            </div>}
          </div>
          <button type="submit" className="transition-all flex justify-center items-center h-24 w-24 bg-gray-400 hover:bg-yellow-300 rounded-xl shadow text-4xl text-white">
            <MdKeyboardArrowRight />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Search