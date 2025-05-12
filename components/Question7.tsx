"use client"
import React, { useEffect, useRef, useState } from 'react'
import { accordianData } from './data/question7'
import { Minus, Plus } from 'lucide-react'

const Question7 = () => {
  const [activeIndex, setIndex] = useState<number | null>(0)
  const [show, setshow] = useState<boolean>(false)
  const modalRef = useRef(null)
  useEffect(() => {
    function closeRef(e: MouseEvent) {
      if (modalRef.current && !(modalRef.current as any).contains(e.target)) {
        setshow(false);
      }
    }
    if (show) {
      document.addEventListener('mousedown', closeRef);
    }
    return () => {
      document.removeEventListener('mousedown', closeRef);
    };
  }, [show]);
  return (
    <div className='h-75vh flex gap-4 w-full bg-slate-800 rounded-lg p-4'>
      <div className='w-1/2 bg-slate-900 p-4 h-[60vh] rounded-lg '>
        {accordianData.map((data: any, index: number) => (
          <div key={index}>
            <div className='flex justify-between mt-4 items-center px-4 bg-slate-700 py-2 rounded-lg'>
              <h1>{data.title}</h1>
              {activeIndex === index ? <Minus onClick={() => setIndex(null)} /> : <Plus onClick={() => setIndex(index)} />}
            </div>
            {activeIndex === index && (
              <div className='mt-1 px-4 py-2'>
                <p>{data.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className='w-1/2  bg-slate-900 p-4 h-[60vh] rounded-lg flex justify-center items-center'>
        <button className='bg-white text-black px-4 py-2 rounded-lg' onClick={() => setshow(true)}>Open Dialog</button>
        {show && (
          <div ref={modalRef} className='bg-slate-700 h-44 p-4 rounded-lg fixed  top-[40%]  left-[50%]'>
            <h1>Dialog box opened</h1>
            <button className=' px-4 py-2 border mt-12 rounded-lg' onClick={() => setshow(false)}>Close</button>
          </div>
        )}

      </div>
    </div>
  )
}

export default Question7
