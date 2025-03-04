import React from 'react'

type sourceCodeProps = {
    showCode:boolean,
    sourceCode:string,
    setShowCode:()=>void,
}
const SourceCodeViewer:React.FC<sourceCodeProps> = ({
    showCode,
    sourceCode,
    setShowCode
}) => {
    return (
        <div>
            {showCode && sourceCode && (
                <div className='fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50'>
                    <div className='bg-slate-900 rounded-lg p-6 w-full max-w-3xl max-h-[80vh] overflow-auto'>
                        <div className='flex justify-between items-center mb-4'>
                            <h2 className='text-white text-xl'>Source Code</h2>
                            <button
                                onClick={() => setShowCode}
                                className='text-white/80 hover:text-white'
                            >
                                ✕
                            </button>
                        </div>
                        <pre className='bg-slate-800 p-4 rounded-lg overflow-x-auto'>
                            <code className='text-white/90'>
                                {sourceCode}
                            </code>
                        </pre>
                    </div>
                </div>

            )}
        </div>
    )
}

export default SourceCodeViewer
