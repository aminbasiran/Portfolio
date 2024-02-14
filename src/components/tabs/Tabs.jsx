import React from 'react'

const Tabs = ({children}) => {
    return (
        <ul className="flex flex-row justify-center list-none my-2 mx-auto">
            {children}
        </ul>
    )
}

export default Tabs



