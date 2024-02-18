import React from 'react'

const Button = ({children}) => {
    return (
        <div className=''>
            
            <button className='text-xs p-2 rounded-md bg-black text-white'>{children}</button>
        </div>
    )
}

export default Button
