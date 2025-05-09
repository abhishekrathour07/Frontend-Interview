"use client"
import { X } from 'lucide-react';
import React, { useState } from 'react'

const Question9 = () => {
    const [value, setValue] = useState<string>("")
    const [chips, setChips] = useState<string[]>([])

    const handleAddChips = () => {
        if (value) {
            setChips((prev) => [...prev, value])
            setValue("")
        }

    }
    const handleRemove = (index: number) => {
        setChips(prev => prev.filter((_, id: number) => id !== index))
    }

    return (
        <div className='bg-slate-800 h-[70vh] rounded-lg flex justify-center flex-col items-center gap-4 p-4'>
            <input type="text" placeholder='Enter chips name' className='p-4 bg-slate-900 border outline-none' value={value} onChange={(e) => setValue(e.target.value)} onKeyDown={(e) => e.key === "Enter" ? handleAddChips() : ""} />

            {chips.length > 0 && (
                <div className='grid grid-cols-5 w-full mt-4'>
                    {chips.map((chip: string, index: number) => (
                        <div key={index} className='bg-slate-600 rounded-full flex items-center justify-between  text-white px-4 py-2 m-2'>
                            <p>{chip}</p>
                            <X className='text-md text-red-700 cursor-pointer' onClick={() => handleRemove(index)} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Question9;
