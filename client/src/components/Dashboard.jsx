import React, { Suspense } from 'react'
import Navbar from './Navbar'
import Balance from './Balance'
import Filter from './Filter'
import Users from './Users'
import { RecoilRoot } from 'recoil'

export default function Dashboard() {
    return (
        <RecoilRoot>
            <div className=' w-full h-screen bg-slate-800'>
                <Navbar />
                <main className='p-0 md:px-4'>
                    <Balance />
                    <Filter />
                    <Suspense fallback={"Loading..."}>
                        <Users image="U1" />
                    </Suspense>
                </main>
            </div>
        </RecoilRoot>
    )
}
