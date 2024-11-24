"use client"
import React ,{useEffect,useState,useRef} from 'react'

function Hero({className}) {

    const [n, setN] = useState(0)
    const AddRef = useRef<HTMLElement | null>(null)

    useEffect(()=>{
    setN(Math.floor((AddRef.current?.clientWidth - 5)/3))
    },[AddRef])



    const renderPoints = (x)=>{
        console.log(x);
    //   for (let i = 0; i < x; i++) {
    //   return <span key={i} x={i+1} style={{width:'10px',height:'10px',borderRaduis:'50%'}} className="cursor-pointer rounded-full transition-transform bg-white hover:scale-150"></span>
    //   }

            const array = []
            for (let i = 0; i < 10; i++) {
                array.push(<span key={i} className="bg-foreground cursor-pointer rounded-full scale-150 hover:bg-background" style={{width:'10px',height:'10px'}}></span>)
            }
            return array

    }
    return (
        <div className={className} ref={AddRef}>
        {renderPoints(n)}
        </div>
    )
}

export default Hero