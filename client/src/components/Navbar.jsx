import React from 'react'
import { useRecoilValue } from 'recoil'
import { balanceAtom } from '../store/atoms/user'

export default function Navbar() {
    const { user } = useRecoilValue(balanceAtom);
    const firstLetter = user.firstName.charAt(0).toUpperCase();
    return (
        <nav className=' w-full bg-zinc-950 border-b-2 border-zinc-800'>
            <div className=' container mx-auto bg-transparent p-3 flex flex-row justify-between items-center text-white'>
                <div>
                    <span className=' text-xl font-bold'>Payments App</span>
                </div>
                <div className=' flex flex-row gap-2 items-center'>
                    <div>
                        <span>Hello, {user.firstName}</span>
                    </div>
                    <div className=' h-9 w-9 bg-zinc-600 flex justify-center items-center rounded-full ' >
                        <span className=' font-bold text-lg'>{firstLetter}</span>
                    </div>
                </div>
            </div>
        </nav>
    )
}
