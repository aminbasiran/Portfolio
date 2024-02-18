import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const Navlinks = () => {

    return (
        <>
            <ul className='list-none flex flex-row gap-2 justify-center my-3'>
                <Link to="/">
                <li  className={` font-semibold px-3 py-2 cursor-pointer hover:bg-zinc-200 text-xs transition-all duration-500 ease-in-out`}>About</li>
                
                </Link>
                <Link to="/projects">
                <li  className={` font-semibold px-3 py-2 cursor-pointer hover:bg-zinc-200 text-xs transition-all duration-500 ease-in-out`}>Projects</li>
                
                </Link>
                <Link to="/work">
                <li  className={` font-semibold px-3 py-2 cursor-pointer hover:bg-zinc-200 text-xs transition-all duration-500 ease-in-out`}>Work</li>
                
                </Link>
                <Link to="/tools">
                <li  className={` font-semibold px-3 py-2 cursor-pointer hover:bg-zinc-200 text-xs transition-all duration-500 ease-in-out`}>Tools</li>
                
                </Link>
            </ul>
        </>
    )
}

export default Navlinks
