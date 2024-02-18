import React from 'react'

const Title = ({children,url}) => {
    return (
        <a href={url} target='_blank' rel='noopener noreferrer'>
            <h1 className='text-left text-3xl font-bold mb-2 dark:text-white'>
                {children}
            </h1>
        </a>
    )
}

export default Title


