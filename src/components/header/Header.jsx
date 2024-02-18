import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="mb-3">
            <Link to="/">
                <h1 className=" text-5xl font-bold text-[#3A71CA]">amnbsrn.<span className="text-black dark:text-white">dev</span><span></span></h1>
            </Link>
        </div>
    )
}

export default Header
