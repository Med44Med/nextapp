"use client"
import {useState,useEffect} from 'react'


import {generateWilayas} from "../../../assets/Communes.js"


import { FaExchangeAlt } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

const TransportForm = ({}) => {

  const wilayas = generateWilayas()

    const [data, setData] = useState({
        type:'transport',
        packageType:'',
        from:'',
        to:'',
        maxDate:null
      })

      
    const [fromList, setFromList] = useState([]) 
    const [fromValue, setFromValue] = useState('') 
    
    const [toList, setToList] = useState([]) 
    const [toValue, setToValue] = useState('') 

    const handleInput = (e)=>{
        setData(perv=>({...perv,[e.target.name]:e.target.value}))
    }


    //generate list of wilayas
    
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
            const filtered = wilayas.filter(item => item.name.toLowerCase().includes(data.to.toLowerCase()))
            setToList(filtered)
          }
        }
    }, [data.to])

    const handleTransportSearch = (e)=>{
        e.preventDefault()
        console.log(data)
        setData({
          type:'transport',
          packageType:'',
          from:'',
          to:'',
          maxDate:null
        })
    }





  return (
    <form onSubmit={e=>handleTransportSearch(e)} className="flex items-center gap-5 px-5 h-full">
          <div className="grow h-full py-6 pr-10 border-r border-gray-300">
            <select name="type" value={data.packageType} onChange={e=>setData(perv =>({...perv,packageType:e.target.value}))} className='outline-none w-full text-xl text-gray-700 cursor-pointer'>
              <option value="">Select a type</option>
              <option value="paper">Paper</option>
              <option value="box">Box</option>
            </select>
          </div>
          <div className="relative grow flex flex-col justify-center items-start gap-3">
            <label className="uppercase font-bold text-sm">From</label>
            <input type="text" name="from" value={data.from} onFocus={()=>console.log('focus')} onBlur={()=>console.log('blur')} onChange={e=>handleInput(e)} spellCheck="false" autoComplete="off" placeholder="Search" className="outline-none text-2xl"/>
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
          <div className="rounded-full  mx-3 w-10 h-10 flex justify-center items-center cursor-pointer transition-all hover:text-yellow-300 hover:border-yellow-300">
            <FaExchangeAlt className="text-2xl"/>
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
          <button type="submit" className="transition-all flex justify-center items-center h-24 aspect-square bg-gray-400 hover:bg-yellow-300 rounded-xl shadow text-4xl text-white">
            <MdKeyboardArrowRight />
          </button>
        </form>
  )
}

export default TransportForm