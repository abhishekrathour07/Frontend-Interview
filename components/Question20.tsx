"use client"
import React, { useState } from 'react'
import { usersData } from './data/tableData'

const Question20 = () => {
    const [currentpage, setCurrentpage] = useState(1);
    const [rows, setRows] = useState(5);

    const totalpage = Math.ceil(usersData.length / rows);
    const startIndex = (currentpage - 1) * rows;
    const endIndex = startIndex + rows;

    const handleChangeRows = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setRows(Number(e.target.value));
        setCurrentpage(1);
    };

    return (
        <div className='h-[70vh] bg-slate-800 w-full rounded-lg p-6 flex flex-col gap-4'>
            {/* Scroll wrapper */}
            <div className="overflow-y-auto max-h-[50vh] rounded-lg">
                <table className="min-w-full bg-slate-700 text-white shadow-lg">
                    <thead className="bg-slate-900 sticky top-0">
                        <tr>
                            <th className="px-6 py-3 border-b-2 border-slate-600 text-left text-xs font-semibold uppercase tracking-wider">ID</th>
                            <th className="px-6 py-3 border-b-2 border-slate-600 text-left text-xs font-semibold uppercase tracking-wider">Name</th>
                            <th className="px-6 py-3 border-b-2 border-slate-600 text-left text-xs font-semibold uppercase tracking-wider">Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usersData.slice(startIndex, endIndex).map((data: any) => (
                            <tr key={data.id} className="hover:bg-slate-800 transition-colors">
                                <td className="px-6 py-4 border-b border-slate-600">{data.id}</td>
                                <td className="px-6 py-4 border-b border-slate-600">{data.name}</td>
                                <td className="px-6 py-4 border-b border-slate-600">{data.age}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination Controls */}
            <div className='flex px-6 items-center justify-between mt-2'>
                <div className='flex gap-2 items-center'>
                    <button
                        className='px-4 py-1 border disabled:opacity-50'
                        disabled={currentpage === 1}
                        onClick={() => setCurrentpage(prev => prev - 1)}
                    >
                        Prev
                    </button>
                    <p>Page {currentpage} of {totalpage}</p>
                    <button
                        className='px-4 py-1 border disabled:opacity-50'
                        disabled={currentpage === totalpage}
                        onClick={() => setCurrentpage(prev => prev + 1)}
                    >
                        Next
                    </button>
                </div>
                <div className='flex gap-2 items-center'>
                    <p>Showing rows</p>
                    <select
                        className='w-20 bg-slate-600 text-white px-2 py-1 rounded'
                        value={rows}
                        onChange={handleChangeRows}
                    >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Question20;
