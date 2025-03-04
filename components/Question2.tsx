"use client"
import React, { useState, useEffect } from 'react'

const Question2 = () => {
    const widthArray = [5, 20, 70, 45, 90, 60]
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    return (
        <div className='h-[70vh] bg-slate-800 w-full rounded-lg p-6 gap-4 '>
            <h1>progress bar</h1>
            <div className='flex flex-col gap-4 mt-12'>
                {widthArray.map((value: number) => (
                    <div key={value} className='h-6 bg-white rounded-full overflow-hidden' >
                        <div 
                            className={`h-full transition-all duration-1000 ease-in-out bg-teal-500 flex items-center justify-end`}
                            style={{ width: isVisible ? `${value}%` : '0%' }}
                        >
                            {value}%
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Question2
