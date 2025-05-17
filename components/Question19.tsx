"use client"
import React, { useEffect, useState } from 'react'

const Question19 = () => {
    const [msg, setMessage] = useState('');
    const [data, setData] = useState('');
    const [bgColor, setBgColor] = useState('');
    const [showToast, setShowToast] = useState(false);

    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmi, setbmi] = useState<number | null>(null);
    const [category, setCategory] = useState('');

    const handleBMI = () => {
        const h = Number(height) / 100
        const BMI = Number(weight) / (h *h)
        setbmi(BMI)
            if (BMI < 18.5) {
                setCategory("Under Weight")
            }
            else if (BMI < 24.5) {
                setCategory("Normal Weight")
            }
            else {
                setCategory("Over Weight")
            }
    }

    useEffect(() => {
        if (!msg) return;

        switch (msg) {
            case "success":
                setData("Successfully submitted");
                setBgColor("bg-green-600");
                break;
            case "error":
                setData("Something went wrong");
                setBgColor("bg-red-600");
                break;
            case "info":
                setData("Information fetched successfully");
                setBgColor("bg-blue-600");
                break;
        }
        setShowToast(true);
        const timer = setTimeout(() => {
            setShowToast(false);
            setMessage('');
        }, 5000);

        return () => clearTimeout(timer);
    }, [msg]);

    return (
        <div className='bg-slate-800 h-[70vh] flex w-full rounded-lg p-4 gap-4'>
            <div className='bg-slate-900 rounded-lg w-1/2 flex flex-col h-full gap-4 justify-center items-center'>
                <h1 className="text-white text-xl font-semibold">Toast</h1>
                <div className='flex gap-4'>
                    <button className='py-1 px-4 border cursor-pointer hover:bg-slate-700' onClick={() => setMessage("success")}>Success</button>
                    <button className='py-1 px-4 border cursor-pointer hover:bg-slate-700' onClick={() => setMessage("error")}>Error</button>
                    <button className='py-1 px-4 border cursor-pointer hover:bg-slate-700' onClick={() => setMessage("info")}>Message</button>
                </div>

                {showToast && (
                    <div className={`w-2/4 px-4 py-2 ${bgColor} text-white rounded-md text-center mt-4 transition-all duration-300`}>
                        {data}
                    </div>
                )}
            </div>

            <div className='bg-slate-900 rounded-lg w-1/2 flex flex-col h-full gap-4 justify-center items-center'>

                <div className='flex gap-4'>
                    <label htmlFor="interest" >Height</label>
                    <input type="text" className='bg-slate-700 text-white p-2 border rounded-lg outline-none' placeholder='Enter interest' onChange={(e) => setHeight(e.target.value)} />
                </div>
                <div className='flex gap-4'>
                    <label htmlFor="interest" >Weight</label>
                    <input type="text" className='bg-slate-700 text-white p-2 border rounded-lg outline-none' placeholder='Enter interest' onChange={(e) => setWeight(e.target.value)} />
                </div>
                <button className='py-1 px-4 border cursor-pointer hover:bg-slate-700' onClick={handleBMI}>Calulate BMI</button>

                {bmi !== null && (
                    <div className='flex flex-col gap-4'>
                        <p>BMI :{bmi}</p>
                        <p>Message: {category}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Question19;
