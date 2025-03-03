import React from 'react'

const Question2 = () => {
    const widthArray = [5, 20, 70, 45, 90, 60]
    return (
        <div className='h-[70vh] bg-slate-800 w-full rounded-lg p-6 flex gap-4 '>
            {widthArray.map((value: number) => (
                <div className='h-4 bg-white rounded-full overflow-hidden' >
                    <div className={`h-full w-[${value+"%"}] bg-teal-500 `}>

                    </div>
                </div>
            ))}
        </div>
    )
}

export default Question2
