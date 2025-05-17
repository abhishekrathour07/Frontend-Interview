"use client"
import { Trash2, X } from 'lucide-react'
import React, { useState } from 'react'

const Question18 = () => {
    const [value, setValue] = useState('')
    const [image, setImage] = useState<string[]>([])
    const [prev, setPrev] = useState<number |null>(null)

    const handleImage = () => {
        if (image) {
            setImage(prev => [...prev, value])
        }
        setValue("")
    }
    const deleteImage = (idx: number) => {
        setImage(prev => prev.filter((_, index) => index !== idx));
    }
    return (
        <div className='h-[70vh] bg-slate-800 w-full flex flex-col rounded-lg p-6 gap-4 '>
            <div className='flex gap-4 items-center justify-center'>
                <input type="text" className=' p-2 rounded-md border bg-slate-900 ' value={value} onChange={(e) => setValue(e.target.value)} placeholder='Enter Image Link' />
                <button className='px-4 py-2 rounded-lg border text-white cursor-pointer' onClick={handleImage}>Add Image</button>
            </div>
            <div className='grid grid-cols-6 px-6'>
                {image?.map((data: string, index: number) => (
                    <div key={index} className='relative mt-4'>
                        <Trash2 className='text-red-600 p-1 bg-white rounded-lg absolute top-3 right-12 cursor-pointer' onClick={() => deleteImage(index)} />
                        <img src={data} alt="Image" className=' h-40 w-40 cursor-pointer' onClick={() => setPrev(index)} />
                    </div>
                ))}
            </div>
            {prev!==null && (
                    <div  className='fixed bottom-20 mt-4'>
                        <X className='text-red-600 absolute top-1 right-0 cursor-pointer' onClick={() => setPrev(null)} />
                        <img src={image[prev]} alt="Image" className=' h-60 w-full' />
                    </div>
                )
            }

        </div>
    )
}

export default Question18
