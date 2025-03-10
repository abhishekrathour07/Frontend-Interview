"use client"
import React, { useState } from 'react'

const Question5 = () => {

    const content = [
        {
            title: "Tab 1",
            description: "Hello My name is Abhishek singh"
        },
        {
            title: "Tab 2",
            description: "Aspiring Software Engineer | Passionate Developer from India"
        },
        {
            title: "Tab 3",
            description: "Catch me in github abhishekrathour07"
        }
    ]
    const [show, setShow] = useState<string>("Tab 1")
    return (
        <div className='bg-slate-900 h-[70vh] w-full rounded-lg flex flex-col'>
            <div className='flex gap-4 p-4 border-b border-slate-700 justify-center'>
                {content.map((data: any) => (
                    <div 
                        key={data.title}
                        onClick={() => setShow(data.title)} 
                        className={`px-4 py-2 rounded-lg cursor-pointer transition-colors
                            ${show === data.title 
                                ? 'border-b-3 border-green-500' 
                                : ""
                            }`}
                    >
                        <h1>{data.title}</h1>
                    </div>
                ))}
            </div>
            
            <div className='p-6 flex-1'>
                {content.map((data: any) => (
                    show === data.title && (
                        <div key={data.title} className='h-full flex items-center justify-center text-white text-xl'>
                            <h1>{data.description}</h1>
                        </div>
                    )
                ))}
            </div>
        </div>
    )
}

export default Question5
