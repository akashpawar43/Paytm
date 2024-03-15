import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import InputBox from '../components/InputBox';

export default function () {
    // const [data, setData] = useState({ firstName: "", lastName: "", username: "", password: "" });
    const navigate = useNavigate()
    // const handleData = (e) => {
    //     setData({ ...data, [e.target.name]: [e.target.value] })
    // }
    // const handleSubmit = async () => {
    //     const { firstName, lastName, username, password } = data
    //     const response = await axios.post('http://localhost:4000/api/v1/user/signup', { firstName, lastName, username, password })
    //     navigate("/dashboard")
    // }
    // console.log(data);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div className=' min-h-screen w-full bg-slate-900 flex items-center'>
            <section className=' mx-auto text-white flex justify-center items-center py-10 px-6 sm:px-8 md:px-10 bg-slate-800 rounded-lg'>
                <div className=' flex items-center flex-col'>
                    <span className=' font-semibold text-3xl pb-3'>Sign Up</span>
                    <p className=' text-slate-300'>Enter Your Information to create an account</p>
                    <div className=' flex flex-col w-full gap-2 py-5'>
                        <InputBox onChange={(e) => setFirstName(e.target.value)} placeholder='John' label="First Name" />
                        <InputBox onChange={(e) => setLastName(e.target.value)} placeholder='Doe' label="last Name" />
                        <InputBox onChange={(e) => setUserName(e.target.value)} placeholder='johndoe@gmail.com' label="Email" />
                        <InputBox onChange={(e) => setPassword(e.target.value)} placeholder='' label="Password" />
                        <button onClick={async () => {
                            const response = await axios.post("http://localhost:4000/api/v1/user/signup", {
                                username,
                                firstName,
                                lastName,
                                password
                            })
                            localStorage.setItem("token", response.data.token)
                            navigate("/dashboard")
                            console.log({ response });
                        }}
                            className=' w-full rounded-md bg-indigo-500 px-2 py-1.5' >Sign Up</button>
                    </div>
                    <p>
                        Alredy have an account? <Link to="/signin" className=' underline' >Login</Link>
                    </p>
                </div>
            </section>
        </div>
    )
}
