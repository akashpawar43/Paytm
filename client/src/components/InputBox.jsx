import React from 'react'

export default function InputBox({ label, placeholder, onChange }) {
    return (
        <div className=' flex flex-col'>
            <div className="text-sm font-medium text-left py-1.5">
                {label}
            </div>
            <input placeholder={placeholder} name={label} onChange={onChange} className='py-1.5 px-2 rounded-md text-black' />
        </div>
    )
}
