import React from 'react';
import { useRecoilValue } from 'recoil';
import { alertAtom } from '../store/atoms/user';

export default function Alert() {
    const alert = useRecoilValue(alertAtom);
    // console.log("alert component");
    // console.log(alert);
    return (
        <div className={`${!alert.display ? "hidden" : " flex flex-row"} absolute right-0 mt-10 mx-5 rounded-md p-4 text-sm ${alert.color == "green" ? "text-[#004434] bg-[#C4F9E2]" : " bg-red-500 text-white"} `} role="alert">
            <span className="pr-3">
                {alert.color == 'green' ?
                    <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx={10} cy={10} r={10} fill="#00B078" />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M14.1203 6.78954C14.3865 7.05581 14.3865 7.48751 14.1203 7.75378L9.12026 12.7538C8.85399 13.02 8.42229 13.02 8.15602 12.7538L5.88329 10.4811C5.61703 10.2148 5.61703 9.78308 5.88329 9.51682C6.14956 9.25055 6.58126 9.25055 6.84753 9.51682L8.63814 11.3074L13.156 6.78954C13.4223 6.52328 13.854 6.52328 14.1203 6.78954Z"
                            fill="white"
                        />
                    </svg>
                    : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                        <path fillRule="evenodd"
                            d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                            clipRule="evenodd"></path>
                    </svg>}
            </span>
            {alert.message}
        </div>
    )
}
