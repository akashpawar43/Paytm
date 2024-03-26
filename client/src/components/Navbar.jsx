import React from 'react'
import { useRecoilValue } from 'recoil'
import { balanceAtom } from '../store/atoms/user'
import { useNavigate, Link } from 'react-router-dom';

export default function Navbar() {
    const { user } = useRecoilValue(balanceAtom);
    const navigate = useNavigate();
    return (
        <nav className=' w-full bg-zinc-950 border-b-2 border-zinc-800'>
            <div className=' container mx-auto bg-transparent p-3 flex flex-row justify-between items-center text-white'>
                <div>
                    <Link to="/dashboard">
                        <span className=' text-xl font-bold'>Payments App</span>
                    </Link>
                </div>
                <div className=' flex flex-row gap-2 items-center'>
                    <button onClick={() => {
                        navigate("history")
                    }} className=' hover:bg-zinc-700 rounded-md px-3 py-1'>
                        History
                    </button>
                    <button onClick={() => {
                        localStorage.removeItem("token");
                        navigate("/signin")
                    }} className=' hover:bg-zinc-700 rounded-md px-3 py-1'>
                        Log Out
                    </button>
                    <div>
                        <span>Hello, {user.firstName}</span>
                    </div>
                    <div className=' h-9 w-9 bg-zinc-600 flex justify-center items-center rounded-full ' >
                        <span className=' font-bold text-lg'>{user.firstName[0].toUpperCase()}</span>
                    </div>
                </div>
            </div>
        </nav>
    )
}
