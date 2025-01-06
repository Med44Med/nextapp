'use client'

import { useState,useEffect } from 'react'

import {generateWilayas} from "../../../assets/Communes.js"
import LocationBox from '../locationBox';

import { MdKeyboardArrowRight } from 'react-icons/md';
import CategoryBox from '../categoryBox';



const Services = () => {

    const [category, setCategory] = useState('file')

    const wilayas = generateWilayas()
    const randomWilaya = ()=>{return Math.floor(Math.random() * 58)}
    const [from, setFrom] = useState(wilayas[randomWilaya()])
    const [to, setTo] = useState(wilayas[randomWilaya()])

    const [data, setData] = useState({
        type:'transport',
        packageType:'',
        from:'',
        to:'',
        maxDate:null
    })

    useEffect(()=>{
        console.log(from.name,to.name)
    },[from])

  return (
    <form className="w-full px-5 h-full flex items-center gap-5 relative">
        <CategoryBox value={category} setValue={setCategory} className="w-1/6 z-50"/>
        <LocationBox value={from} setValue={setFrom} options={wilayas} label={'from'} className="grow z-20"/>
        <LocationBox value={to} setValue={setTo} options={wilayas} label={'to'} className="grow"/>
        <button type="submit" className="transition-all flex justify-center items-center ml-5 h-20 aspect-square bg-gray-400 hover:bg-yellow-300 rounded-xl shadow text-4xl text-white">
            <MdKeyboardArrowRight />
        </button>
    </form>
  )
}

export default Services