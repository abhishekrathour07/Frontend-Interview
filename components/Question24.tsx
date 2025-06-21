"use client"

import React, { useRef, useState } from 'react'

const Question24 = () => {
    const countRef = useRef(0);
    const [countState, setCountState] = useState(0);

    return (
        <div className="flex bg-slate-700 h-[70vh] flex-col rounded-lg justify-center items-center">
            <p>CountRef: {countRef.current}</p>

            <button className="px-4 py-2 border rounded-2xl" onClick={() => (countRef.current += 1)}>Increment Ref</button>

            <p>CountState: {countState}</p>

            <button className="px-4 py-2 border rounded-2xl" onClick={() => setCountState(countState + 1)}>
                Increment State
            </button>
        </div>
    );
}

export default Question24
