"use client"
import { ShoppingBag } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const Question14 = () => {
  const [cartValue, setCartValue] = useState(0)
  const [data, setData] = useState([])
  const [filter, setFilter] = useState("")
 
  useEffect(() => {
    const foodData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/recipes");
        const data = await response.json()
        setData(data?.recipes)
      } catch (error) {
        console.log(error)
      }
    }
    foodData()
  }, [])

  const filterData = data.filter((data:any)=>filter? data?.rating==filter : data )
  return (
    <div className='bg-slate-800 h-[75vh]  w-full rounded-lg flex flex-col gap-6 justify-center p-4'>
      <div className='flex justify-between items-center w-full px-8'>
        <h1 className='text-3xl text-white '>Food Items </h1>
        <p className='text-2xl text-white flex gap-2'><ShoppingBag />Cart {cartValue}</p>
      </div>
     <div className='flex justify-end'>
       <select
        className=' bg-slate-600 border px-4 py-2  rounded-lg'
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="">Select Filter</option>
        <option value="4.4">4.4</option>
        <option value="4.5">4.5</option>
        <option value="4.6">4.6</option>
        <option value="4.7">4.7</option>
      </select>
     </div>


      <div className='bg-slate-700 text-white w-full p-4 h-[50vh] rounded-lg overflow-y-scroll'>
        <div className='grid grid-cols-4 gap-4'>
          {filterData.map((data: any, index: number) => (
            <div key={index} className='bg-slate-900 p-2 rounded-lg flex flex-col gap-2'>
              <img src={data?.image} alt="image-food" className='h-32 w-full rounded-lg scale-100 hover:scale-105 transition-all duration-300'/>
              <p>{data?.name}</p>
              <div className='flex justify-between items-center'>
                <p>{data?.rating}</p>
                <button className='bg-white cursor-pointer text-black px-4 py-2 rounded-lg' onClick={()=>setCartValue(cartValue+1)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>


    </div>
  )
}

export default Question14
