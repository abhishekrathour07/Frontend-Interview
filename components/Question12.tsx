"use client"
import React, { useState } from 'react'

const Question12 = () => {

    const [leftItem, setLeftItem] = useState([
        { title: "JavaScript", ischeck: false },
        { title: "Java", ischeck: false },
        { title: "Python", ischeck: false },
    ])
    const [rightItem, setRightItem] = useState<{ title: string; ischeck: boolean }[]>([])

    const onRightClick = () => {
        const selectedItems = leftItem.filter(item => item.ischeck);
        const newLeftItems = leftItem.filter(item => !item.ischeck);
        const newRightItems = [...rightItem, ...selectedItems.map(item => ({ ...item, ischeck: false }))];
        setLeftItem(newLeftItems);
        setRightItem(newRightItems);
    }

    const onLeftClick = () => {
        const selectItems = rightItem.filter(items => items.ischeck)
        const newRightItems = rightItem.filter(items => !items.ischeck)
        const newLeftItem = [...leftItem, ...selectItems.map(item => ({ ...item, ischeck: false }))]
        setRightItem(newRightItems);
        setLeftItem(newLeftItem)
    }

    return (
        <div className='bg-slate-800 h-[75vh]  w-full rounded-lg p-4 gap-4'>
            <h1 className='text-xl text-center'>Transfer list</h1>
            <button className='px-4 py-2 rounded-lg text-black bg-white mr-4' onClick={onLeftClick}>move left</button>
            <button className='px-4 py-2 rounded-lg text-black bg-white ' onClick={onRightClick}>move right</button>
            <section className='flex justify-between px-12 mt-6'>
                <div className='flex flex-col gap-4'>

                    <div className='flex flex-col mt-2 gap-4'>
                        {leftItem.map((item: any, index: number) => (
                            <div key={index} className='flex gap-2'>
                                <input type="checkbox" checked={item.ischeck} onChange={() => setLeftItem(prev => prev.map((val, idx) =>
                                    idx === index ? { ...val, ischeck: !val.ischeck } : val))} />
                                <p>{item.title}</p>
                            </div>
                        ))}
                    </div>

                </div>
                <div className='flex flex-col gap-4'>
                    {rightItem?.map((item: any, index: number) => (
                        <div key={index} className='flex gap-2'>
                            <input type="checkbox" checked={item.ischeck} onChange={() => setRightItem(prev => prev.map((val, idx) =>
                                idx === index ? { ...val, ischeck: !val.ischeck } : val))} />
                            <p>{item.title}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Question12
