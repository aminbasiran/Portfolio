import React from 'react'

const Tool = ({children}) => {
    return (
        <div className='flex flex-row gap-2 my-4 place-items-center'>
            <h1 className='font-semibold text-zinc-500'>Built with:</h1>
            {children}
        </div>
    )
}

export default Tool
