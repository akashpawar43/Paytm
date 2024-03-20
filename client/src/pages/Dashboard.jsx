import React, { Suspense, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Balance from '../components/Balance';
import Filter from '../components/Filter';
import Users from '../components/Users';
import UserLoading from '../Loader/UserLoading';
import { useNavigate } from 'react-router-dom';
import Alert from '../components/Alert';

export default function Dashboard() {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    useEffect(() => {
        if (!token) {
            navigate("/signin");
        }
    }, [token]);
    return (
        <div className=' w-full h-screen bg-zinc-900'>
            <Suspense fallback={"..."}>
                <Navbar />
            </Suspense>
            <main className='p-0 md:px-4'>
                <Suspense fallback={"..."}>
                    <Balance />
                </Suspense>
                <Filter />
                <Suspense fallback={<UserLoading />}>
                    <Users />
                </Suspense>
            </main>
        </div>
    )
}
