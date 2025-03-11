"use client"
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const Question6 = () => {
    const [showindex, setShowindex] = useState<number>(0)
    const [cursoulData, setCursoulData] = useState<number>(0)
    const content = ["Content 1", "Content 2", "Content 3", "Content 4"]
    const cursoul = ["Abhishek Singh", "Developer", "Programmer", "Fir bhi feeling nhi develop kr paya"]

    const handleUp = () => {
        setShowindex(prev => (prev - 1 + content.length) % content.length)
    }


    const handleDown = () => {
        setShowindex(prev => (prev + 1) % content.length)
    }

    const handleLeftCursoul = () => {
        setCursoulData(prev => (prev - 1 + cursoul.length) % cursoul.length)
    }
    const handleRightCursoul = () => {
        setCursoulData(prev => (prev + 1) % cursoul.length)
    }
    useEffect(() => {
        setTimeout(handleRightCursoul, 4000)

    },[cursoulData])
    return (
        <div className='h-[70vh] bg-slate-800 w-full rounded-lg p-6 flex gap-4 '>
            <div className='w-1/2 flex gap-4 items-center justify-center'>
                <span onClick={handleLeftCursoul} className='w-8 h-8 border rounded-full flex justify-center items-center cursor-pointer'>
                    <ArrowLeft />
                </span>
                <div className=' w-90 h-52 rounded-lg flex items-center justify-center bg-gradient-to-r  from-blue-500 to-teal-500 text-xl'>
                    {cursoul[cursoulData]}
                </div>
                <span onClick={handleRightCursoul} className='w-8 h-8 border rounded-full flex justify-center items-center cursor-pointer'>
                    <ArrowRight />
                </span>
            </div>
            <div className='w-1/2 flex p-6 gap-4 justify-center items-center'>
                <div className='w-72 rounded-lg h-full bg-gradient-to-r  from-blue-500 to-teal-500 text-xl flex justify-center items-center'>
                    {content[showindex]}
                </div>

                <div className='flex flex-col gap-2'>
                    <button disabled={showindex === 0} onClick={handleUp} className='w-12 h-12 border rounded-full flex justify-center items-center disabled:cursor-not-allowed cursor-pointer disabled:text-gray-400'>
                        <ArrowUp />
                    </button>
                    <button disabled={showindex === (content.length - 1)} onClick={handleDown} className='w-12 h-12 border rounded-full flex justify-center items-center cursor-pointer disabled:cursor-not-allowed disabled:text-gray-400'>
                        <ArrowDown />
                    </button>
                </div>
            </div>
        </div>
    )
}


export default Question6
