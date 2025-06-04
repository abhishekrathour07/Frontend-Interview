'use client'
import React, { useState } from 'react'

const Question23 = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleUser = () => {
        setEmail("User@gmail.com")
        setPassword("12345678")
    }
    const handleAdmin = () => {
        setEmail("admin@gmail.com")
        setPassword("12345678")
    }
    return (
        <div className='bg-slate-800 h-[70vh] flex flex-col w-full  justify-center items-center  rounded-lg p-4 gap-4'>

            <h1 className='text-2xl font-bold mt-4 mb-4'>Login Form</h1>

           <div className='border p-4 rounded-lg space-y-4'>
             <div className='flex flex-col gap-2'>
                <label htmlFor="email">Email <span>*</span></label>
                <input type="text" placeholder='Enter Yur email' value={email}  className='p-2 border rounded-md' onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor="email">Password <span>*</span></label>
                <input type="text" placeholder='Enter Your password' value={password} className='p-2 border rounded-md' onChange={(e)=>setPassword(e.target.value)}  />
            </div>
            <button className='bg-white text-black px-4 py-2 rounded-lg w-full'>Submit</button>
            <div className='flex items-center  gap-6 mt-4'>
                <button className='bg-white text-black px-4 py-2  rounded-lg' onClick={handleUser}>User login</button>
                <button className='bg-white text-black px-4 py-2  rounded-lg' onClick={handleAdmin}>Admin Login</button>
            </div>
           </div>
        </div>
    )
}

export default Question23
