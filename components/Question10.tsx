"use client"
import React, { useState } from 'react'

const Question10 = () => {
    const [value, setValue] = useState("")
    const [todos, setTodosValue] = useState<any[]>([])

    const handleAddTodo = () => {
        if (value) {
            setTodosValue(prev => [{
                title: value,
                isCompleted: false,
            }, ...prev])
            setValue("")
        }
    }
    const deleteTodo = (index: number) => {
        setTodosValue(prev => prev.filter((_, id: number) => id !== index))
    }
    console.log(todos)

    return (
        <div className='bg-slate-800 h-[70vh] rounded-lg flex justify-center flex-col items-center gap-4 p-4'>
            <div className='flex gap-4 items-center'>
                <input type="text" placeholder='Enter the name of todo' value={value} className=' bg-slate-900 text-white  px-4 py-2 border outline-none' onChange={(e) => setValue(e.target.value)} />
                <button className='p-2  bg-green-500 text-white rounded-md' onClick={handleAddTodo}>Add Todo</button>

            </div>

            {todos.length > 0 && (
                todos.map((todo: { title: string, isCompleted: boolean }, index: number) => (
                    <div key={index} className='flex items-center gap-2'>
                        <input type="checkbox" checked={todo.isCompleted} onChange={() =>
                            setTodosValue(prev =>
                                prev.map((todo, idx) =>
                                    idx === index ? { ...todo, isCompleted: !todo.isCompleted } : todo
                                ))}
                        />
                        <p className={`${todo.isCompleted ? "line-through text-gray-400" : ""}`}>{todo.title}</p>
                        <button className='px-4 py-1 border text-white rounded-lg' onClick={() => deleteTodo(index)}>delete</button>
                    </div>
                ))
            )}
        </div>
    )
}

export default Question10
