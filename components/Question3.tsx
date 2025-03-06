"use client"
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Question3 = () => {
  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = async () => {
    const response = await fetch('https://dummyjson.com/recipes?limit=100');
    const data = await response.json()
    setRecipes(data?.recipes)
  }
  useEffect(() => {
    fetchData()
  }, [])

  const pageCount = 9;
  const totalItems = recipes.length;
  const itemsPerPage = Math.ceil(totalItems / pageCount);
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  return (
    <div className='h-[70vh] bg-slate-800 flex flex-col gap-4 w-full rounded-lg p-6 overflow-y-auto scrollbar-hide'>
      <div className='flex gap-2 items-center justify-center'>
        <button
          className='border p-2 rounded-lg cursor-pointer hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed text-white'
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          <ChevronLeft />
        </button>
        {Array.from({ length: pageCount }, (_, i) => (
          <div
            key={i}
            className={`border px-4 py-2 rounded-lg cursor-pointer hover:bg-slate-700 transition-colors
              ${currentPage === i + 1 ? "bg-gradient-to-r from-teal-700 to-blue-700 font-bold" : "border-slate-600"}
            `}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </div>
        ))}
        <button
          className='border p-2 rounded-lg cursor-pointer hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed text-white'
          disabled={currentPage === pageCount}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          <ChevronRight />
        </button>
      </div>
      <div className='grid sm:grid-cols-1 grid-cols-2 lg:grid-cols-3 gap-6'>
        {recipes?.slice(start, end).map((item: any) => (
          <div key={item.id} className='bg-slate-700 rounded-lg p-4 flex flex-col gap-2 hover:bg-slate-600 transition-colors'>
            <div className='relative h-40 w-full overflow-hidden rounded-lg'>
              <Image
                src={item.image}
                alt={item.name}
                fill
                className='object-cover rounded-lg hover:scale-110 transition-transform duration-300'
              />
            </div>
            <h3 className='text-lg font-semibold text-white line-clamp-1'>{item.name}</h3>
            <span className='text-yellow-400 flex items-center gap-1'>
              Rating: {item.rating}/5
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Question3
