import React from 'react'

const Description = ({children}) => {
    return (
        <h1 className='text-left text-sm text-zinc-500 font-semibold'>
            {children}
        </h1>
    )
}

export default Description
