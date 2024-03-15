import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import InputBox from '../components/InputBox';

export default function Signin() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    return (
        <div className=' min-h-screen w-full bg-slate-900 flex items-center'>
            <section className=' mx-auto text-white flex justify-center items-center py-10 px-6 sm:px-8 md:px-10 bg-slate-800 rounded-lg'>
                <div className=' flex items-center flex-col'>
                    <span className=' font-semibold text-3xl pb-3'>Sign In</span>
                    <span className=' text-slate-300'>Enter Your credentials to access your account</span>
                    <div className=' flex flex-col w-full gap-4 py-5'>
                        <InputBox onChange={(e) => setUserName(e.target.value)} placeholder='johndoe@gmail.com' label="Email" />
                        <InputBox onChange={(e) => setPassword(e.target.value)} placeholder='' label="Password" />
                        <button onClick={async () => {
                            const response = await axios.post("http://localhost:4000/api/v1/user/signin", {
                                username,
                                password
                            })
                            localStorage.setItem("token", response.data.token)
                            navigate('/dashboard')
                        }}
                            className=' w-full rounded-md bg-indigo-500 px-2 py-1.5' >Sign In</button>
                    </div>
                    <p>
                        Alredy have an account? <Link to="/signup" className=' underline' >Sign Up</Link>
                    </p>
                </div>
            </section>
        </div>
    )
}
