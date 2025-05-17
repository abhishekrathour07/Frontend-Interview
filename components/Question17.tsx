"use client"
import React, { useState } from 'react'

const Question17 = () => {

    const [amount, setAmount] = useState('')
    const [interest, setinterest] = useState('')
    const [time, settime] = useState('')
    const [password, setPassword] = useState('')

    const calculatorMortgage = () => {
        const r = Number(interest) / 100 / 12;
        const n = Number(time) * 12;
        const monthlyPayment = Number(amount) * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        return Math.floor(monthlyPayment);
    };
    const passwordStrengthChecker = () => {
        // Regex definitions
        const weakRegex = /^.{0,7}$/;
        const mediumRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/; 
        const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

        if (weakRegex.test(password)) {
            return "Weak password";
        } else if (strongRegex.test(password)) {
            return "Strong password";
        } else if (mediumRegex.test(password)) {
            return "Good password";
        } else {
            return "Weak password";
        }
    };



    return (
        <div className='bg-slate-800 h-[70vh] flex  w-full rounded-lg p-4 gap-4'>
            <div className='bg-slate-900 rounded-lg  w-1/2 flex flex-col h-full gap-4 justify-center items-center'>
                <div className='flex gap-4'>
                    <label htmlFor="amount" >Loan amount(INR)</label>
                    <input type="text" className='bg-slate-700 text-white p-2 border rounded-lg outline-none' placeholder='Enter Amount' onChange={(e) => setAmount(e.target.value)} />
                </div>
                <div className='flex gap-4'>
                    <label htmlFor="interest" >Annual interest rate(%)</label>
                    <input type="text" className='bg-slate-700 text-white p-2 border rounded-lg outline-none' placeholder='Enter interest' onChange={(e) => setinterest(e.target.value)} />
                </div>
                <div className='flex gap-4'>
                    <label htmlFor="time" >Time period (year)</label>
                    <input type="text" className='bg-slate-700 text-white p-2 border rounded-lg outline-none' placeholder='Enter time' onChange={(e) => settime(e.target.value)} />
                </div>
                <button className='px-4 py-2 rounded-lg border text-white ' onClick={calculatorMortgage}> calculate</button>
                <p>Interest per month: {calculatorMortgage()}</p>
            </div>
            <div className='bg-slate-900 rounded-lg m-4 w-1/2 flex flex-col justify-center items-center'>

                <div className='flex gap-4'>
                    <label htmlFor="time" >Enter Your password</label>
                    <input type="text" className='bg-slate-700 text-white p-2 border rounded-lg outline-none' placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} />
                </div>
                {password && (
                    <div>
                        {passwordStrengthChecker()}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Question17
