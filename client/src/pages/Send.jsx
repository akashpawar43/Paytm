import React, { useState } from 'react'
import InputBox from '../components/InputBox';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';

export default function Send() {
    const [amount, setAmount] = useState();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    return (
        <div className=' min-h-screen w-full bg-slate-900 flex items-center'>
            <section className=' mx-auto text-white flex justify-center items-center py-8 px-6 sm:px-8 md:px-10 bg-slate-800 rounded-lg w-[30%]'>
                <div className=' flex items-center flex-col w-full'>
                    <span className=' font-semibold text-3xl pb-16'>Send Money</span>
                    <div className=' flex flex-row gap-3 w-full'>
                        <div className=' h-12 w-12 bg-slate-600 flex justify-center items-center rounded-full ' >
                            <span className=' text-2xl'>{name.charAt(0).toUpperCase()}</span>
                        </div>
                        <div className=' flex items-center'>
                            <span className=' font-semibold text-2xl'>{name}</span>
                        </div>
                    </div>
                    <div className=' flex flex-col w-full gap-4 pb-5'>
                        <InputBox onChange={(e) => setAmount(e.target.value)} placeholder='Enter amount' label="Amount (in Rs)" />
                        <button onClick={async () => {
                            const response = await axios.post("http://localhost:4000/api/v1/account/transfer", {
                                amount,
                                to: id
                            }, {
                                headers: {
                                    Authorization: "Bearer " + localStorage.getItem("token")
                                }
                            })
                            console.log({ response });
                            navigate('/dashboard')
                        }}
                            className=' w-full rounded-md bg-indigo-500 px-2 py-1.5' >Sign In</button>
                    </div>
                </div>
            </section>
        </div>
    )
}
