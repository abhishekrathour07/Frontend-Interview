'use client';
import React from 'react'
import useCounter from './hooks/useCounter'
import useFetch from './hooks/useFetch';

const Question22 = () => {
    const { value, increment, decrement, reset } = useCounter(10)
    const { error, loading, data } = useFetch("https://dummyjson.com/recipes")
    return (
        <div className='bg-slate-800 h-[70vh] flex  justify-center items-center  w-full rounded-lg p-4 gap-4'>
            <div className='flex flex-col justify-center items-center gap-8 w-1/2 bg-slate-900 p-4 rounded-lg'>
                <h1 className='bg-slate-600 h-10 w-10 rounded-full border flex justify-center items-center'>{value}</h1>
                <div className='flex gap-4'>
                    <button className='border rounded-lg p-1' onClick={increment}>Increment</button>
                    <button className='border rounded-lg p-1' onClick={decrement}>Decrement</button>
                    <button className='border rounded-lg p-1' onClick={reset}>Reset</button>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center gap-8 w-1/2 bg-slate-900 p-4 rounded-lg'>
                {error ? error : loading ? "Loading data ...." : (
                    <div>
                        <h1 className='text-2xl font-bold mt-10 mb-10'>Recipies Name</h1>
                        {data?.slice(0, 8).map((value: any) => (
                            <div key={value.id}>
                                {value.name}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Question22
