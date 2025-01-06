import {useState} from 'react';

import { FaRegFileAlt } from "react-icons/fa";
import { FiPackage } from "react-icons/fi";



const CategoryBox = ({className,value,setValue}) => {

    const [show, setShow] = useState(false)

    const iconType = ()=>{
        switch (value) {
            case 'file':return <FaRegFileAlt className="size-8"/>
            case 'package':return <FiPackage className="size-8"/>
        
            default:return null
        }
    }
  
    return (
    <div className={className}>
        <div
            onClick={()=>{setShow(true)}}
            className="w-full h-full bg-yellow-300 rounded-md border py-6 px-3 cursor-pointer flex items-center justify-center gap-3"
        >
            {iconType()}
            <span
                className="text-xl font-semibold uppercase"
            >
                {value}
            </span>
        </div>
        {show && <div className="fixed top-0 left-0 w-screen h-screen">
            <div 
                onClick={()=>{setShow(false)}}
                className="absolute top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.4)]"
            >
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 rounded-xl shadow-xl bg-white p-10 grid grid-cols-3 grid-rows-2 gap-3 gap-y-3">
                <div className="shadow-md rounded-md flex flex-col justify-center items-center gap-3">file</div>
                <div className="shadow-md rounded-md flex flex-col justify-center items-center gap-3">package</div>
                <div className="shadow-md rounded-md flex flex-col justify-center items-center gap-3">file</div>
                <div className="shadow-md rounded-md flex flex-col justify-center items-center gap-3">package</div>
                <div className="shadow-md rounded-md flex flex-col justify-center items-center gap-3">file</div>
                <div className="shadow-md rounded-md flex flex-col justify-center items-center gap-3">package</div>
            </div>
        </div>}
    </div>
  )
}

export default CategoryBox