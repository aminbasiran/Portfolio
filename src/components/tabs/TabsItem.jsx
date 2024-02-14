import React from 'react'

const TabsItem = ({activeTab,handleChangeActive}) => {
    return (
        // <li onClick={() => {handleChangeActive(header)}} className={`${active ? "active" : ""} py-2 px-4 hover:bg-gray-100 hover:cursor-pointer`}>{header}</li>
        <li className={activeTab === 'about' ? 'active' : ''} onClick={() => handleChangeActive('about')}>About</li>
    )
}

export default TabsItem
