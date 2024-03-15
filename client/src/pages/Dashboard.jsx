import React, { Suspense } from 'react'
import Navbar from '../components/Navbar'
import Balance from '../components/Balance'
import Filter from '../components/Filter'
import Users from '../components/Users'
import { RecoilRoot } from 'recoil'
import UserLoading from '../Loader/UserLoading'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
    const token = localStorage.getItem("token");
    const navigate = useNavigate()
    if (!token) {
        navigate("/signin");
    }
    return (
        <RecoilRoot>
            <div className=' w-full h-screen bg-slate-800'>
                <Navbar />
                <main className='p-0 md:px-4'>
                    <Balance />
                    <Filter />
                    <Suspense fallback={<UserLoading />}>
                        <Users image="U1" />
                    </Suspense>
                </main>
            </div>
        </RecoilRoot>
    )
}
