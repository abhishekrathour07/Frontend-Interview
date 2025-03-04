"use client"
import { Search } from 'lucide-react';
import React, { useState, useEffect, useCallback } from 'react'

interface Recipe {
  id: number;
  name: string;
}

interface Cache {
  [key: string]: Recipe[];
}

const Question1 = () => {
  const [value, setValue] = useState<string>('');
  const [results, setResults] = useState<Recipe[]>([]);
  const [show, setShow] = useState<boolean>(false);
  const [cache, setCache] = useState<Cache>({});
  
  const fetchData = useCallback(async () => {
    if (cache[value]) {
      setResults(cache[value]);
      return;
    }
    const response = await fetch(`https://dummyjson.com/recipes/search?q=${value}`)
    const data = await response.json();
    setResults(data?.recipes)
    setCache((prev) => ({ ...prev, [value]: data?.recipes }))
  }, [value, cache]);

  useEffect(() => {
    const debounce = setTimeout(fetchData, 400);
    return () => {
      clearTimeout(debounce)
    }
  }, [fetchData])
  return (
    <div>
      <div className='relative'>
        <input
          type="text"
          className='h-12 w-full px-4 bg-slate-900 outline-none rounded-lg'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setShow(true)}
          onBlur={() => setShow(false)}
        />
        <Search className='absolute right-3 top-1/2 transform -translate-y-1/2 text-white' />
      </div>
      {show && (
        <div className='max-h-[50vh] bg-slate-800 overflow-y-scroll scrollbar-hide text-white rounded-lg'>
          {results?.map((data: Recipe) => (
            <div className='px-4 py-2 hover:bg-slate-700' key={data.id}>
              <p>{data?.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Question1
