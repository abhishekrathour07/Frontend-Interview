"use client"
import { CircleArrowLeft, CircleArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'
type Props = {
    Heading: string,
    solution?: React.ReactNode,
    questionNumber?:string,
}
const Template: React.FC<Props> = ({ Heading, solution ,questionNumber}) => {
    const router = useRouter()
    return (
        <div className='bg-gradient-to-br from-slate-950 to-blue-950 h-screen flex justify-center items-center p-4'>
            <div className='bg-gradient-to-r from-blue-600 to-teal-500 rounded-xl shadow-2xl flex justify-between w-full  h-full p-8'>
                <CircleArrowLeft onClick={() => router.back()} className='w-10 h-10 text-white/80 hover:text-white hover:scale-110 transition-all cursor-pointer' />
                <div className='flex flex-col gap-12 p-6'>
                    <h1 className='text-4xl font-bold text-white tracking-wide'>{Heading}</h1>
                    <div>
                        {solution}
                    </div>

                </div>
                <CircleArrowRight className='w-10 h-10 text-white/80 hover:text-white hover:scale-110 transition-all cursor-pointer' onClick={() => router.push(`${questionNumber}`)} />
            </div>
            
        </div>
    )
}

export default Template
