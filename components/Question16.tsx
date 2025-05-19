"use client"
import { Star } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const Question16 = () => {
    const [time, setTime] = useState(0)
    const [start, setStart] = useState(false)
    const [rating, setRating] = useState(0)

    useEffect(() => {
        let timer: any
        if (start) {
            timer = setInterval(() => {
                setTime(time + 1)
            }, 1000)
        }
        return () => clearInterval(timer)
    }, [time, start])
    return (
        <div className='bg-slate-800 h-[70vh] w-full rounded-lg flex  gap-6 justify-center p-4'>
            <div className='bg-slate-900 rounded-lg m-4 w-1/2 flex flex-col justify-center items-center'>
                <h1 className='text-2xl  font-semibold'>Stopwatch Time : {time}</h1>
                <div className='flex gap-4 mt-6'>
                    <button className=' px-4 py-2 rounded-lg border cursor-pointer' onClick={() => setStart(true)}>Start</button>
                    <button className=' px-4 py-2 rounded-lg border cursor-pointer' onClick={() => setStart(false)}>Stop</button>
                    <button className=' px-4 py-2 rounded-lg border cursor-pointer' onClick={() => setTime(0)}>Reset</button>
                </div>
            </div>
            <div className='bg-slate-900 rounded-lg m-4 w-1/2 flex flex-col justify-center items-center'>
                <h1 className='text-2xl font-semibold mb-4'>Rating</h1>
                <div className='flex gap-2'>
                    {Array.from({length:5}).map((_,index:number) => (
                        <button
                            key={index}
                            onClick={() => setRating(index)}
                            className='text-yellow-400 text-4xl focus:outline-none'
                        >
                            {index <= rating ? <Star fill='yellow'/> : <Star/> }
                        </button>
                    ))}
                </div>
                <p className='mt-4 text-lg'>You rated: {rating+1} / 5</p>
            </div>
        </div>

    )
}

export default Question16
