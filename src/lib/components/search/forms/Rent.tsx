import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md';
import {useState,useEffect,useRef} from 'react';
import {generateWilayas} from "../../../assets/Communes.js"

const Rent = () => {



    const wilayas = generateWilayas()

    const FromRef = useRef(null)

    const [data, setData] = useState({
      from:''
    })




    const [from, setFrom] = useState('')
    const [fromList, setFromList] = useState([])

    const handleInput = (e)=>{
        setFrom(e.target.value)
    }

    useEffect(() => {
        if (from.length > 1) {

          const arr = wilayas.filter(item => item.name.toLowerCase() === from.toLowerCase())
          

            if (arr.length === 0) {
              
              const filteredList = wilayas.filter((item) => item.name.toLowerCase().includes(from.toLowerCase()))
                                          .sort((a,b)=> {
                                            if (a.name < b.name) {
                                              return -1;
                                            }
                                            if (a.name > b.name) {
                                              return 1;
                                            }
                                            return 0;
                                          })
              setFromList(filteredList)
            } 
            // else {
            //   setFromList([])
            // }
        } else {
            setFromList([])
        }

    },[from])

    useEffect(() => {
      const ref = FromRef.current
      const press = (e)=> {
        
        if (e.key == "ArrowUp") {
          console.log('Up');
        }
        
        if (e.key == "ArrowDown") {
          console.log('Down');
        }
        
        if (e.key == "Enter") {
          console.log('Enter');
        }
        
      }
      
      ref.addEventListener("keydown",press)
      return () => {
        ref.removeEventListener("keydown",press)
      }
    }, [FromRef.current])
    

    useEffect(() => {
      setFrom(data.from)
      setFromList([])
      console.log(data);
      
    }, [data.from])
    

  return (
    <form  className="flex items-center gap-5 px-5 h-full" onKeyDown={(event)=>{if (event.keyCode === 13) { event.preventDefault() }} } >
          <div className="relative grow flex flex-col justify-center items-start gap-3">
            <select name="" id="">
              <option value="1">1</option>
              <option value="2">2</option>

            </select>
          </div>
          <div className="relative grow flex flex-col justify-center items-start gap-3">
            <label className="uppercase font-bold text-sm">From</label>
            <input ref={FromRef} type="text" name="from" value={data.form || from} onChange={e=>handleInput(e)} spellCheck="false" autoComplete="off" placeholder="Search" className="outline-none text-2xl"/>
            {
                fromList.length > 0 && <div className="absolute bottom-full left-0 h-36 w-full bg-white border rounded-xl p-3">
                    {fromList.map(w=>{return(<div 
                                                key={w.id}
                                                onMouseEnter={()=>{setFrom(w.name)}}
                                                onClick={()=>{setData(perv=>({...perv,from:w.name}))}}
                                                className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer"
                                            >
                                            {w.name}
                                            </div>)
                    })}
                </div>
            }
          </div>
          
          <button type="submit" className="transition-all flex justify-center items-center h-24 aspect-square bg-gray-400 hover:bg-yellow-300 rounded-xl shadow text-4xl text-white">
            <MdKeyboardArrowRight />
          </button>
        </form>
  )
}

export default Rent