import React from 'react'

export default function InputBox({ label, placeholder, onChange, value, name }) {
    return (
        <div className=' flex flex-col'>
            <div className="text-sm font-medium text-left py-1.5">
                {label}
            </div>
            <input placeholder={placeholder} name={name} value={value} onChange={onChange} className='py-1.5 px-2 rounded-md text-black' />
        </div>
    )
}
