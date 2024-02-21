import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Header = () => {
    return (
        <div className="mb-10">
            <div className=" flex flex-row gap-2 justify-center">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/aminbasiran"><FaGithub className="text-xl" /></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/muhammadamin6151/"><FaLinkedin className="text-xl"/></a>
            </div>
            <Link to="/">
                <h1 className=" text-5xl font-bold text-[#3A71CA]">amnbsrn.<span className="text-black dark:text-white">dev</span><span></span></h1>
            </Link>
        </div>
    )
}

export default Header
