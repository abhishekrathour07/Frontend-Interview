"use client"
import { MoveLeft, MoveRight } from 'lucide-react'
import React, {  useState } from 'react'

const Question13 = () => {
    const [activeIndex, setActiveindex] = useState(0)
    const data = [
        "https://as1.ftcdn.net/v2/jpg/08/38/92/70/1000_F_838927016_O0rDyOyUKK05aKItkCqXhXwXju6G3j35.jpg",
        "https://as1.ftcdn.net/v2/jpg/10/70/25/76/1000_F_1070257626_MHkzFBuLehbdWoul6pfHVkdHkkF6Eept.jpg",
        "https://as1.ftcdn.net/v2/jpg/07/94/93/06/1000_F_794930659_piZR378W6GaXrVG5k7pxhGxp072KHyUL.jpg",
        "https://t4.ftcdn.net/jpg/09/77/48/49/240_F_977484995_KAc32z2zmaVSsHxPhFMw92rUlnCc1uE9.jpg"

    ]
    const onrightClick = () => {
        return  activeIndex === data.length - 1 ? setActiveindex(0) : setActiveindex(activeIndex + 1)
    }
    const onlefttClick = () => {
       return  activeIndex === 0 ? setActiveindex(data.length - 1) : setActiveindex(activeIndex - 1)
    }
    
    return (
        <div className='bg-slate-800 h-[75vh]  w-full rounded-lg flex justify-center p-4'>
            <button className=' px-4 py-1 bg-white text-black' onClick={onlefttClick}><MoveLeft /></button>
            <div>
                {data.map((img: string, index: number) => (
                    <div key={index} className='flex flex-col'>
                        <img src={img} alt='Image' className={`h-[450px] object-cover w-[600px] ${index === activeIndex ? "block" : "hidden"}`} />
                    </div>
                ))}
                <div className='flex gap-2 mt-4 items-center justify-center'>
                    {Array.from({ length: data.length }).map((_, i) => (
                        <div onClick={() => setActiveindex(i)} key={i} className={`  h-4 w-4 rounded-full ${activeIndex === i ? "bg-sky-900" : "bg-sky-200"}`}></div>
                    ))}
                </div>
            </div>
            <button className=' px-4 py-1 bg-white text-black' onClick={onrightClick}><MoveRight /></button>

        </div>
    )
}

export default Question13
