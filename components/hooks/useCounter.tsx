"use client"
import  { useState } from 'react'

const useCounter = (initialvalue = 0) => {
    const [value, setState] = useState(initialvalue)
    const increment = () => {
        setState(prev => prev + 1)
    }
    const decrement = () => {
        setState(prev => prev - 1)
    }
    const reset = () => {
        setState(initialvalue)
    }
    return { value, increment, decrement, reset }
}

export default useCounter
