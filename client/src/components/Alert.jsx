import React from 'react'
import { useRecoilValue } from 'recoil'
import { alertAtom } from '../store/atoms/user'

export default function Alert() {
    const alert = useRecoilValue(alertAtom);
    console.log(alert);
    return (
        <div className={`${!alert.display ? "hidden" : "block"} p-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400`} role="alert">
            <span className="font-medium">Success alert!</span> {alert.message}.
        </div>
    )
}
