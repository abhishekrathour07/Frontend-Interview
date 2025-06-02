"use client"
import { X } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Starred = () => {
    const [starredMovie, setStarredMovie] = useState<any[]>([])
    const GetstarredMovie = () => {
        const starred = JSON.parse(localStorage.getItem('starredMovies') || '[]');
        setStarredMovie(starred)
    }

    useEffect(() => {
        GetstarredMovie()
    }, [])
    return (
        <div>
            <div className='flex items-center justify-between px-10 h-16 bg-indigo-700 text-white'>
                <h1 className='text-red-700 font-bold text-lg'>HDHUB4u</h1>
                <ul className='flex gap-6'>
                    <Link href={'/question21'}>Movies</Link>
                    <Link href={'/question21/starred-movie'}>Stared Movies</Link>
                    <Link href={'/question21/watch-later'}>Watch Later</Link>
                </ul>
            </div>
            <div className='grid grid-cols-4 gap-6 p-4 mt-8'>
                {starredMovie.length > 0 ?
                    starredMovie.map((movie, index: number) => (
                        <div className='p-4 bg-slate-700 rounded-lg flex flex-col gap-4 ' key={index}>
                            <img src={movie.imageURL} alt={movie.title} className='rounded-lg h-64' />
                            <h1 className='text-2xl text-green-500 font-bold'>{movie.title}</h1>
                            <h1>{movie.summary}</h1>
                           <div className='flex justify-between px-4'>
                             <p>Launch Year :{movie.year}</p>
                              <X className='h-8 w-8 rounded-full text-red-500 bg-slate-600 p-2' />
                           </div>
                        </div>
                    )) : <div className='text-center w-screen text-red-500 text-3xl font-bold'> No starred Movies found </div>
                }
            </div>
        </div>
    )
}

export default Starred
