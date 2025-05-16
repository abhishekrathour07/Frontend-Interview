"use client"
import React, { useState } from 'react'

const Question15 = () => {
  const [show, setShow] = useState<number | null>(null);

  const recipeFilters = [
    { name: "Vegetarian", icon: "🥦" },
    { name: "Non-Vegetarian", icon: "🍗" },
    { name: "Keto", icon: "🥩" },
    { name: "Low-Carb", icon: "📉🍞" },
  ];

  return (
    <div className='bg-slate-800 h-[75vh] w-full rounded-lg flex flex-col gap-6 justify-center p-4'>
    <div className='grid grid-cols-4 px-4 items-center justify-center'>
      {recipeFilters.map((data:any,index:number)=>(
        <div key={data.name} className='relative '>
            <p onMouseEnter={()=>setShow(index)} onMouseLeave={()=>setShow(null)} className=' cursor-pointer  text-2xl w-fit'>{data.icon}</p>
            {show === index? (
              <div className='absolute bottom-10 px-2 py-1 rounded-lg transition-all duration-500 bg-white text-black'>
                {data.name}
              </div>
            ):""}
        </div>
      ))}
    </div>
    </div>
  );
};

export default Question15;
