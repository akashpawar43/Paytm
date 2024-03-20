import { Link } from 'react-router-dom';
import InputBox from '../components/InputBox';
import { useRecoilState } from 'recoil';
import { signUpAtom } from '../store/atoms/user';
import { useAuth } from '../hooks/Auth';
import Alert from '../components/Alert';

export default function () {
    const [data, setData] = useRecoilState(signUpAtom);
    const handleData = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    console.log({ data });
    const handleSignUp = useAuth("signup", { data });
    return (
        <>
            <Alert />
            <div className=' min-h-screen w-full bg-zinc-900 flex items-center'>
                <section className=' mx-auto text-white flex justify-center items-center py-10 px-6 sm:px-8 md:px-10 bg-zinc-800 rounded-lg'>
                    <div className=' flex items-center flex-col'>
                        <span className=' font-semibold text-3xl pb-3'>Sign Up</span>
                        <p className=' text-slate-300'>Enter Your Information to create an account</p>
                        <div className=' flex flex-col w-full gap-2 py-5'>
                            <InputBox onChange={handleData} value={data.firstName} placeholder='John' label="First Name" name="firstName" />
                            <InputBox onChange={handleData} value={data.lastName} placeholder='Doe' label="last Name" name="lastName" />
                            <InputBox onChange={handleData} value={data.username} placeholder='johndoe@gmail.com' label="Email" name="username" />
                            <InputBox onChange={handleData} value={data.password} placeholder='' label="Password" name="password" />
                            <button onClick={handleSignUp} className=' w-full rounded-md bg-indigo-600 hover:bg-indigo-500 mt-2.5 px-2 py-1.5' >Sign Up</button>
                        </div>
                        <p>
                            Alredy have an account? <Link to="/signin" className=' underline' >Login</Link>
                        </p>
                    </div>
                </section>
            </div>
        </>
    )
}
