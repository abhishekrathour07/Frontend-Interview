"use client"
import { movies, moviesGenre, rating, year } from '@/components/data/movies'
import { X } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

const Home = () => {

    const [value, setValue] = useState('')
    const [moviesData, setMovie] = useState([...movies])
    const [genre, setGenre] = useState('All')
    const [ratingval, setRating] = useState('')
    const [yearval, setYear] = useState('');
    const [addMovie, setAddMovie] = useState(false)
    const [star, setStar] = useState(false)
    const [watch, setWatch] = useState(false)

    const handlefilterMovies = () => {
        const filterMovies = movies.filter((movie) => {
            const matchTitle = movie.title.toLowerCase().includes(value.toLowerCase());
            const matchRating = ratingval ? movie.rating === Number(ratingval) : true;
            const matchGenre = genre === 'All' ? true : movie.genre.some(m => m.toLowerCase() === genre.toLowerCase())
            const matchYear = yearval ? movie.year === Number(yearval) : true;

            return matchTitle && matchRating && matchGenre && matchYear;
        });
        setMovie(filterMovies)

    }
    useEffect(() => {
        handlefilterMovies()
    }, [value, ratingval, genre, yearval])

    const modalRef = useRef<HTMLDivElement>(null);
    useEffect(() => {

        function handleClickOutside(event: MouseEvent) {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setAddMovie(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [addMovie]);

    const handleStarMovie = (movie: any) => {
        const movieData = {
            title: movie.title,
            summary: movie.summary,
            imageURL: movie.imageURL,
            rating: movie.rating,
            year: movie.year,
        };
        const starred = JSON.parse(localStorage.getItem('starredMovies') || '[]');
        const alreadyStarred = starred.some((m: any) => m.title === movie.title);
        if (!alreadyStarred) {
            starred.push(movieData);
            localStorage.setItem('starredMovies', JSON.stringify(starred));
        }

    }

    const handleWatchLater = (movie: any) => {
        const movieData = {
            title: movie.title,
            summary: movie.summary,
            imageURL: movie.imageURL,
            rating: movie.rating,
            year: movie.year,
        };
        const watchlater = JSON.parse(localStorage.getItem('starredMovies') || '[]');
        const alreadyStarred = watchlater.some((m: any) => m.title === movie.title);
        if (!alreadyStarred) {
            watchlater.push(movieData);
            localStorage.setItem('watchLater', JSON.stringify(watchlater));

        }

    }
    return (
        <div>
            {/* Header */}
            <div className='flex items-center justify-between px-10 h-16 bg-indigo-700 text-white'>
                <h1 className='text-red-700 font-bold text-lg'>HDHUB4u</h1>
                <input type="text" placeholder='Enter movie name to Search' className='bg-white px-10 py-2 rounded-md text-black border'
                    value={value} onChange={(e) => setValue(e.target.value)} />
                <ul className='flex gap-6'>
                    <Link href={'/question21'}>Movies</Link>
                    <Link href={'/question21/starred-movie'}>Stared Movies</Link>
                    <Link href={'/question21/watch-later'}>Watch Later</Link>
                </ul>
            </div>
            {/* Filter Data */}
            <div className='flex mt-6 px-12 justify-between items-center '>
                <h1 className='font-bold text-2xl'>Movies</h1>
                <select name="genre" value={genre} onChange={(e) => setGenre(e.target.value)} className='bg-slate-700 p-2 text-white'>
                    <option value="All">All</option>
                    {moviesGenre.map((data) => (
                        <option key={data} value={data}>{data}</option>
                    ))}
                </select>
                <select value={ratingval} onChange={(e) => setRating(e.target.value)} name="rating" id="" className='bg-slate-700 p-2 text-white'>
                    {rating.map((data) => (
                        <option key={data} value={data}>{data}</option>
                    ))}
                </select>
                <select value={yearval} onChange={(e) => setYear(e.target.value)} name="year" id="year" className='bg-slate-700 p-2 text-white'>
                    {year.map((data) => (
                        <option key={data} value={data}>{data}</option>
                    ))}
                </select>

                <button className='bg-white px-4 py-2 text-black rounded-lg cursor-pointer' onClick={() => setAddMovie(true)}>Add Movie</button>
            </div>
            {/* Movies Cards */}
            <div className='grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 mt-8'>
                {moviesData.map((movie) => (
                    <div className='p-4 bg-slate-700 rounded-lg flex flex-col gap-4 ' key={movie.id}>
                        <img src={movie.imageURL} alt={movie.title} className='rounded-lg h-64' />
                        <h1 className='text-2xl text-green-500 font-bold'>{movie.title}</h1>
                        <h1>{movie.summary}</h1>
                        <div className='flex justify-between items-center'>
                            <button
                                className='bg-white rounded-lg text-black px-8 cursor-pointer py-2'
                                onClick={() => {
                                    handleStarMovie(movie);
                                    setStar(true)
                                }}
                            >
                                {star ? "Already Star" : "star"}
                            </button>
                            <button className='bg-white rounded-lg text-black px-8 py-2 cursor-pointer' onClick={() => {
                                handleWatchLater(movie);
                                setWatch(true)
                            }}>
                                {watch ? "Already watch" : "watch"}

                            </button>
                        </div>

                    </div>
                ))}
            </div>
            {addMovie && (
                <div ref={modalRef} className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-4 bg-slate-700 z-50 rounded-lg shadow-lg w-3xl">
                    <div className='px-6 py-4 space-y-4'>
                        <div className='flex justify-between items-center'>
                            <h1 className='text-2xl'>Add New Movies</h1>
                            <X className='text-red-500 cursor-pointer ' onClick={() => setAddMovie(false)} />
                        </div>

                        <div className='flex flex-col'>
                            <h2>Movie Name</h2>
                            <input type="text" placeholder='Enter movie name' className='bg-white px-10 py-2 rounded-md text-black border' />
                        </div>
                        <div className='flex flex-col '>
                            <h2>Movie Summary</h2>
                            <input type="text" placeholder='Enter movie Summary' className='bg-white px-10 py-2 rounded-md text-black border' />
                        </div>
                        <div className='flex flex-col '>
                            <h2>Movie Genre</h2>
                            <input type="text" placeholder='Enter movie Genre' className='bg-white px-10 py-2 rounded-md text-black border' />
                        </div>
                        <div className='flex flex-col'>
                            <h2>Movie IMDB Rating</h2>
                            <input type="text" placeholder='Enter movie Rating' className='bg-white px-10 py-2 rounded-md text-black border' />
                        </div>
                        <div className='flex flex-col'>
                            <h2>Lauch year</h2>
                            <input type="text" placeholder='Enter movie Lauch year' className='bg-white px-10 py-2 rounded-md text-black border' />
                        </div>
                        <div className='flex justify-between items-center mt-8 px-16 gap-6 '>
                            <button className='bg-transparent border rounded-md cursor-pointer px-5 py-2 w-full' onClick={() => setAddMovie(false)}>Discard Movie</button>
                            <button className='bg-white text-black rounded-md px-5 py-2  cursor-pointer w-full'>Add Movie</button></div>
                    </div>
                </div>
            )}


        </div>
    )
}

export default Home
