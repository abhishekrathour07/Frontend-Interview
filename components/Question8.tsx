"use client"
import React, { useState, useRef } from 'react'

const Question8 = () => {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""))
  const inputRefs = useRef<HTMLInputElement[]>([])

  const handleChange = (element: HTMLInputElement, index: number) => {
    const value = element.value
    if (isNaN(Number(value))) return

    const newOtp = [...otp]
    newOtp[index] = value.substring(value.length - 1)
    setOtp(newOtp)

    // Focus next input
    if (element.value && index < 5) {
      inputRefs.current[index + 1].focus()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace") {
      if (!otp[index] && index > 0) {
        inputRefs.current[index - 1].focus()
      }
    }
  }

  const verifyOTP = () => {
    const otpValue = otp.join("")
    if (otpValue.length === 6) {
      alert(`OTP Entered: ${otpValue}`)
    }
  }

  return (
    <div className='bg-slate-800 h-[70vh] rounded-lg flex justify-center flex-col items-center'>
      <h1 className='text-xl mb-4'>Enter the OTP</h1>
      <div className='flex gap-2 mb-4'>
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            ref={(input) => {
              if (input) inputRefs.current[index] = input
            }}
            value={digit}
            onChange={(e) => handleChange(e.target, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className='p-4 border rounded-md w-12 h-12 text-center text-white bg-slate-700 focus:border-blue-500 focus:outline-none'
            maxLength={1}
          />
        ))}
      </div>
    </div>
  )
}

export default Question8
