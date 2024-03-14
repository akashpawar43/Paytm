import React from 'react'

export default function Navbar() {
    return (
        <nav className=' w-full bg-slate-900'>
            <div className=' container mx-auto bg-transparent p-4 flex flex-row justify-between items-center text-white'>
                <div>
                    <span className=' text-xl font-bold'>Payments App</span>
                </div>
                <div className=' flex flex-row gap-3 items-center'>
                    <div>
                        <span>Hello, User</span>
                    </div>
                    <div className=' h-8 w-8 bg-slate-600 flex justify-center items-center rounded-full ' >
                        <span>U</span>
                    </div>
                </div>
            </div>
        </nav>
    )
}
