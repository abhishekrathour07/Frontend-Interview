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
            <div className='flex gap-6 cursor-pointer items-center border-b px-6 py-2 border-gray-400'>
                {content.map((data: any) => (
                    <div className={`p-2 rounded-lg transition-all duration-500 ${show === data.title ? "bg-white text-black " : "border-none"}`} key={data.title} onClick={() => setShow(data.title)}>
                        {data.title}
                    </div>
                ))}
            </div>
            {content.map((data: any) => (
                show === data.title && (
                    <div className='flex inset-0 items-center justify-center h-full' key={data.title}>

                        <p> {data.description}</p>
                    </div>
                )))}
        </div>
    )
}

export default Question5
