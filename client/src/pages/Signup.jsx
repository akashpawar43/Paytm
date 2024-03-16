import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import InputBox from '../components/InputBox';
import { useRecoilCallback, useRecoilValue, useSetRecoilState } from 'recoil';
import { firstNameAtom, lastNameAtom, passwordAtom, signUpSelector, usernameAtom } from '../store/atoms/user';

export default function () {
    const setFirstName = useSetRecoilState(firstNameAtom);
    const setLastName = useSetRecoilState(lastNameAtom);
    const setUserName = useSetRecoilState(usernameAtom);
    const setPassword = useSetRecoilState(passwordAtom);
    const data = useRecoilValue(signUpSelector);
    const navigate = useNavigate();
    const handleSignUp = useRecoilCallback(({ set }) => async () => {
        const response = await axios.post("http://localhost:4000/api/v1/user/signup", data);
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard");
        console.log({ response });
    });
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
                        <button onClick={handleSignUp} className=' w-full rounded-md bg-indigo-500 px-2 py-1.5' >Sign Up</button>
                    </div>
                    <p>
                        Alredy have an account? <Link to="/signin" className=' underline' >Login</Link>
                    </p>
                </div>
            </section>
        </div>
    )
}
