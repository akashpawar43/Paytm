import InputBox from '../components/InputBox';
import { useSearchParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { amountAtom } from '../store/atoms/user';
import Alert from '../components/Alert';
import useTransfer from '../hooks/Transfer';

export default function Send() {
    const [amount, setAmount] = useRecoilState(amountAtom);
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const handleTransfer = useTransfer({amount, id});
    return (
        <>
            <Alert />
            <div className=' min-h-screen w-full bg-zinc-900 flex items-center'>
                <section className=' mx-auto text-white flex justify-center items-center py-8 px-6 sm:px-8 md:px-10 bg-zinc-800 rounded-lg w-[90%] sm:w-[95%] md:w-[50%] xl:w-96'>
                    <div className=' flex items-center flex-col w-full'>
                        <span className=' font-semibold text-3xl pb-16'>Send Money</span>
                        <div className=' flex flex-row gap-3 w-full'>
                            <div className=' h-12 w-12 bg-slate-600 flex justify-center items-center rounded-full ' >
                                <span className=' text-2xl'>{name[0].toUpperCase()}</span>
                            </div>
                            <div className=' flex items-center'>
                                <span className=' font-semibold text-2xl'>{name}</span>
                            </div>
                        </div>
                        <div className=' flex flex-col w-full gap-4 pb-5'>
                            <InputBox onChange={(e) => setAmount(e.target.value)} placeholder='Enter amount' label="Amount (in Rs)" />
                            <button onClick={handleTransfer}
                                className=' w-full rounded-md bg-indigo-500 px-2 py-1.5' >Sign In</button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
