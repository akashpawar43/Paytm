import { Link } from 'react-router-dom'
import InputBox from '../components/InputBox';
import { useRecoilState } from 'recoil';
import { signInAtom } from '../store/atoms/user';
import { useAuth } from '../hooks/Auth';

export default function Signin() {
    const [data, setData] = useRecoilState(signInAtom);
    const handleData = (e) => {
        setData({...data, [e.target.name]: e.target.value });
    };
    const handleSignIn = useAuth("signin", { data });
    return (
        <>
            <div className=' min-h-screen w-full bg-zinc-900 flex items-center'>
                <section className=' mx-auto text-white flex justify-center items-center py-10 px-6 sm:px-8 md:px-10 bg-zinc-800 rounded-lg'>
                    <div className=' flex items-center flex-col'>
                        <span className=' font-semibold text-3xl pb-3'>Sign In</span>
                        <span className=' text-slate-300'>Enter Your credentials to access your account</span>
                        <div className=' flex flex-col w-full gap-1.5 py-5'>
                            <InputBox onChange={handleData} value={data.username} placeholder='johndoe@gmail.com' label="Email" name="username" />
                            <InputBox onChange={handleData} value={data.password} placeholder='' label="Password" name="password" />
                            <button onClick={handleSignIn} className=' w-full rounded-md bg-indigo-600 hover:bg-indigo-500 mt-2.5 px-2 py-1.5' >Sign In</button>
                        </div>
                        <p>
                            Alredy have an account? <Link to="/signup" className=' underline' >Sign Up</Link>
                        </p>
                    </div>
                </section>
            </div>
        </>
    )
}
