import React, { Suspense, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Balance from '../components/Balance';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

export default function Dashboard() {
    const token = localStorage.getItem("token");
    const location = useLocation();
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
                <Outlet />
            </main>
        </div>
    )
}
