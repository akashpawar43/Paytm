import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { usersDetailsAtomFamily } from '../store/atoms/user'

export default function Filter() {
    const setUser = useSetRecoilState(usersDetailsAtomFamily);
    return (
        <div className=' bg-slate-800 pb-4'>
            <div className=' w-full lg:max-w-7xl mx-auto px-4 md:px-0 text-white flex flex-col gap-3'>
                <div className='text-lg font-bold'>Users</div>
                <div>
                    <input type="text" onChange={(e)=> setUser(e.target.value)} placeholder='Search users...' className=' w-full p-2.5 px-4 rounded-md text-black' />
                </div>
            </div>
        </div>
    )
}
