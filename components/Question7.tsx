"use client"
import React, { useEffect, useState } from 'react'
import { accordianData } from './data/question7'
import { MinusCircle, PlusCircle } from 'lucide-react'

const Question7 = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <div className='h-[70vh] bg-slate-800 w-full rounded-lg p-6 flex gap-4 '>
      <div className='w-1/2 bg-slate-700 p-4 rounded-lg'>
        {accordianData.map((data: any, index: number) => (
          <div key={index} >
            <div className='p-4 flex my-1 bg-slate-800  rounded-lg justify-between'>
              <p>{data.title}</p>
              {activeIndex === index ?
                <MinusCircle
                  className='cursor-pointer'
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                />
                :
                <PlusCircle
                  className='cursor-pointer'
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                />

              }
            </div>
            {activeIndex === index && (
              <div className=' px-4 py-2 my-1 bg-slate-800 rounded-lg'>
                {data.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Question7
