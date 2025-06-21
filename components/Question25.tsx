"use client"
import { ArrowUpDown, MoveLeft, MoveRight } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const Question25 = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [itemperPage, setItemPerPage] = useState(7);
    type Recipe = {
        id: number;
        name: string;
        cuisine: string;
        cookTimeMinutes: number;
    };
    const [data, setData] = useState<Recipe[]>([])
    const [asc, setAsc] = useState(false)

    const fetchData = async () => {
        const response = await fetch("https://dummyjson.com/recipes");
        const data = await response.json();
        setData(data?.recipes)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const totalPage = Math.ceil(data.length / itemperPage)
    const start = (currentPage - 1) * itemperPage;
    const end = currentPage * itemperPage

    const sortId = () => {
        const sortData = [...data].sort((a, b) => asc ? a.id - b.id : b.id - a.id)
        setAsc(!asc)
        setData(sortData)
    }
    const sortName = () => {
        const sortData = [...data].sort((a, b) => asc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name))
        setAsc(!asc)
        setData(sortData)
    }
    const sortCusine = () => {
        const sortData = [...data].sort((a, b) => asc ? a.cuisine.localeCompare(b.cuisine) : b.cuisine.localeCompare(a.cuisine))
        setAsc(!asc)
        setData(sortData)
    }
    const sortTime = () => {
        const sortData = [...data].sort((a, b) => asc ? a.cookTimeMinutes - b.cookTimeMinutes : b.cookTimeMinutes - a.cookTimeMinutes)
        setAsc(!asc)
        setData(sortData)
    }

    return (

        <div className='bg-slate-700 h-[70vh] rounded text-white p-8 overflow-y-scroll'>
            <div>
                <div className='flex h-12 border justify-between items-center px-6'>
                    <p className='flex gap-2'>id <ArrowUpDown className='cursor-pointer' onClick={sortId} /></p>
                    <p className='flex gap-2'>name <ArrowUpDown className='cursor-pointer' onClick={sortName} /></p>
                    <p className='flex gap-2'>cuisine <ArrowUpDown className='cursor-pointer' onClick={sortCusine} /></p>
                    <p className='flex gap-2'>cookTimeMinutes <ArrowUpDown className='cursor-pointer' onClick={sortTime} /></p>

                </div>
                {data.slice(start, end).map((value: any, index: number) => (
                    <div key={index} className='flex h-12 border justify-between items-center  px-6'>
                        <p>{value.id}</p>
                        <p>{value.name}</p>
                        <p>{value.cuisine}</p>
                        <p>{value.cookTimeMinutes}</p>

                    </div>
                ))}
            </div>

            <div className='flex justify-between  mt-6'>
                <div className='flex gap-6 '>
                    <MoveLeft className=' border p-2 rounded h-10 w-10' onClick={() => setCurrentPage(currentPage - 1)} />
                    {Array.from({ length: totalPage }).map((val, idx) => (
                        <div key={idx} className={` px-4 py-2 border rounded ${currentPage === (idx + 1) && "bg-slate-900"}`} onClick={() => setCurrentPage(idx + 1)} >
                            {idx + 1}
                        </div>
                    ))}
                    <MoveRight className=' border p-2 rounded h-10 w-10' onClick={() => setCurrentPage(currentPage + 1)} />
                </div>

                <select defaultValue={itemperPage} className='w-32 h-10 border bg-slate-700 rounded justify-between flex px-4' onChange={(e) => setItemPerPage(Number(e.target.value))}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                </select>
            </div>

        </div >
    )
}

export default Question25
