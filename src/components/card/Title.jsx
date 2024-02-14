import React from 'react'

const Title = ({children}) => {
    return (
        <h1 className='text-left text-3xl font-bold mb-2 dark:text-white'>
            {children}
        </h1>
    )
}

export default Title


