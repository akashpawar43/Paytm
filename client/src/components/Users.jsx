import { useRecoilValue } from 'recoil'
import { userDetailsSelectorFamily } from '../store/atoms/user'

export default function Users({ image }) {
    const users = useRecoilValue(userDetailsSelectorFamily);
    return (
        <>
            {users.map((user) => (
                <div key={user._id} className=' w-full py-5'>
                    <div className=' w-full lg:max-w-7xl mx-auto px-4 md:px-0 text-white flex flex-row justify-between gap-3'>
                        <div className=' flex flex-row gap-3 '>
                            <div className=' h-10 w-10 bg-slate-600 flex justify-center items-center rounded-full ' >
                                <span>{image}</span>
                            </div>
                            <div className=' flex items-center'>
                                <span className=' font-bold'>{user.firstName} {user.lastName}</span>
                            </div>
                        </div>
                        <div>
                            <button className=' bg-indigo-500 py-2 px-3 rounded-md'>Send Money</button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
