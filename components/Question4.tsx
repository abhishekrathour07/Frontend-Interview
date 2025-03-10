import { FilePlus, FolderPlus, ListCollapse, Minimize } from 'lucide-react'
import React from 'react'

const Question4 = () => {
    return (
        <div className='bg-slate-900 h-[70vh] flex gap-2 p-2 rounded-lg '>
            <div className='w-1/4 bg-slate-800 h-full rounded-lg'>
                <div className='flex gap-4 cursor-pointer border-b border-gray-500 justify-end p-2'>
                    <p><FolderPlus/></p>
                    <p><FilePlus/></p>
                    <p><ListCollapse/></p>
                </div>
            </div>
            <div className='w-full bg-slate-800 h-full p-2 rounded-lg'>
                <p>folder</p>
            </div>
            
        </div>
    )
}

export default Question4
