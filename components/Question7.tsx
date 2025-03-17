"use client"
import React, { useRef, useState } from 'react'
import { accordianData } from './data/question7'
import { MinusCircle, PlusCircle } from 'lucide-react'

const Question7 = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [openModal, setOpenModal] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setOpenModal(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className='h-[70vh] bg-slate-800 w-full rounded-lg p-6 flex items-center justify-center gap-4 relative'>
      <div className='h-full bg-slate-800 w-full flex  rounded-lg p-6 gap-4 '>
        <div className='w-1/2 bg-slate-700 flex flex-col justify-center p-4 rounded-lg'>
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
        <div className='w-1/2 bg-slate-700 flex flex-col p-4 rounded-lg items-center '>
          <h2 className='text-2xl'>Dialog Box</h2>
          <div className='border w-full h-full mt-4 flex items-center justify-center'>
            <button className='bg-white text-black px-4 py-2 border-none outline-none rounded-lg cursor-pointer'
              onClick={() => setOpenModal(!openModal)}>Click Me</button>
          </div>
        </div>
      </div>
      {openModal && (
        <div ref={modalRef} className='bg-slate-900 rounded-lg px-6 py-8 absolute min-w-96  z-50'>
          <div className='text-2xl  flex items-center justify-center'>
            <p>Do you want to submit</p>
          </div>
          <div className='flex gap-2 justify-end mt-8'>
            <button className='bg-transparent border text-white px-4 py-2 
             outline-none rounded-lg cursor-pointer' onClick={() => setOpenModal(false)}>
              Cancel
            </button>

            <button className='bg-white text-black px-4 py-2
             border-none outline-none rounded-lg cursor-pointer'
              onClick={() => {
                setOpenModal(false)
                alert("Data submitted successfully")
              }}>
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Question7