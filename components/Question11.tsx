"use client"
import React, { useState } from 'react'

const Question11 = () => {
    const [width, setWidth] = useState(30);
    return (
        <div className='bg-slate-800 h-[75vh] w-full rounded-lg flex flex-col p-4 gap-4'>
            <div className='flex justify-between items-center'>
                <h1 className='text-2xl'>Progress bar</h1>
                <span> {width}%</span>
            </div>
            <div className=' h-8 bg-white rounded-lg overflow-hidden'>
                <div className={`${width <= 30 ? "bg-red-600" : width <= 60 ? "bg-orange-400" : "bg-green-500"} h-full`}
                    style={{ width: `${width}%` }}>

                </div>
            </div>
            <div className='flex gap-4 items-center '>
                <button className='px-4 py-2 bg-red-600 text-white rounded-lg disabled:cursor-not-allowed' disabled={width === 0} onClick={() => setWidth(width - 10)}>10% decrease</button>
                <button className='px-4 py-2 bg-green-600 text-white rounded-lg disabled:cursor-not-allowed' disabled={width === 100} onClick={() => setWidth(width + 10)}>10% increase</button>
            </div>
        </div>


    )
}

export default Question11
