import { Link } from 'react-router-dom'

export default function Signin() {
    return (
        <div className=' min-h-screen w-full bg-slate-900 flex items-center'>
            <section className=' mx-auto text-white flex justify-center items-center py-10 px-6 sm:px-8 md:px-10 bg-slate-800 rounded-lg'>
                <div className=' flex items-center flex-col'>
                    <span className=' font-semibold text-3xl pb-3'>Sign In</span>
                    <span className=' text-slate-300'>Enter Your credentials to access your account</span>
                    <form action="" className=' flex flex-col w-full gap-4 py-5'>
                        <div className=' flex flex-col gap-1.5'>
                            <label htmlFor="">Email</label>
                            <input type="email" placeholder='johndoe@example.com' className=' py-1.5 px-2 rounded-md' required />
                        </div>
                        <div className=' flex flex-col gap-1.5'>
                            <label htmlFor="">Password</label>
                            <input type='password' placeholder='' className=' py-1.5 px-2 rounded-md' required />
                        </div>
                        <button className=' w-full rounded-md bg-indigo-500 px-2 py-1.5' >Sign In</button>
                    </form>
                    <p>
                        Alredy have an account? <Link to="/signup" className=' underline' >Sign Up</Link>
                    </p>
                </div>
            </section>
        </div>
    )
}
