import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function TransactionHistory() {
    const [data, setData] = useState([]);
    const [firstname, setFirstName] = useState("");
    async function handleData() {
        const res = await axios.get("http://localhost:4000/api/v1/account/history", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        });
        setFirstName(res.data.user)
        setData(res.data.history);
    }
    useEffect(() => {
        handleData();
    }, []);
    console.log(data);
    return (
        <div className=' w-full py-5'>
            <div className=' w-full lg:max-w-7xl mx-auto px-4 md:px-0 text-white flex flex-col justify-between gap-3'>
                <p className=' text-2xl font-bold'>Transaction History</p>
                <div className=' grid grid-cols-12 gap-4 p-4 rounded-md bg-zinc-700 w-full text-white'>
                    <div className=' col-span-1'>No.</div>
                    <div className=' col-span-4'>Sender</div>
                    <div className=' col-span-4'>Reciever</div>
                    <div className=' col-span-3'>Amount</div>
                </div>
                {data.length > 0 &&
                    (data.map((user, i) => (
                        <div key={i} className=' grid grid-cols-12 gap-4 p-4 rounded-md bg-zinc-800 w-full text-white'>
                            <div className=' col-span-1'>{i + 1}</div>
                            <div className=' col-span-4'>{user.senderFirstName} {user.senderLastName}</div>
                            <div className=' col-span-4'>{user.receiverFirstName} {user.receiverLastName}</div>
                            {firstname == user.senderFirstName
                                ?
                                <div className=' text-lg col-span-3 text-red-600'>-{user.amount}</div>
                                :
                                <div className=' text-lg col-span-3 text-green-600'>{user.amount}</div>
                            }
                        </div>
                    )))
                }
            </div>
        </div>
    )
}
