import { useRecoilValue } from 'recoil'
import { balanceAtom } from '../store/atoms/user'

export default function Balance() {
    const { balance } = useRecoilValue(balanceAtom);
    // console.log(balance);
    return (
        <div className='bg-slate-800'>
            <div className=' w-full lg:max-w-7xl mx-auto px-4 md:px-0 py-8 text-white '>
                <span className=' text-lg font-bold'>Your Balance {balance}</span>
            </div>
        </div>
    )
}
