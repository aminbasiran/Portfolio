import React, {useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { WiSunrise } from "react-icons/wi";
import Tabs from "../tabs/Tabs";
import { Link } from "react-router-dom";

const Layout = ({children}) => {
    const [activeTab, setActiveTab] = useState("about");

    const [isDarkMode,setIsDarkMode] = useState(false)


    const handleDarkMode = () => {
        document.documentElement.classList.add('dark')
        setIsDarkMode(true)
    }

    const handleBrightMode = () => {
        document.documentElement.classList.remove('dark')
        setIsDarkMode(false)
    }
    
    const handleChangeActive= (value) => {
        if (value === activeTab) {
            return;
        }
        
        setActiveTab(value);
    };

    return (
    <div className="w-full h-full dark:bg-[#181619] transition-all duration-500 ease-in-out">

        <div className="entry ">
            <div className="flex flex-col md:flex-row md:justify-between">
                <h1 className=" text-5xl font-bold text-[#3A71CA]">amnbsrn.<span className="text-black dark:text-white">dev</span><span></span></h1>
                {isDarkMode ? <WiSunrise onClick={handleBrightMode} className={` text-2xl md:mx-auto hover:cursor-pointer dark:text-white`}/> : <BsFillMoonStarsFill onClick={handleDarkMode} className="mx-auto  hover:cursor-pointer"/>}
                <div className="my-4 flex gap-3">
                    <FaLinkedin className="text-3xl hover:cursor-pointer dark:bg-white"/>
                    <FaGithubSquare className="text-3xl hover:cursor-pointer dark:bg-white"/>
                </div>
            </div>
            <div className="mb-3">
                <Tabs>
                    <Link to="/">
                        <li className={`py-2 px-4 hover:cursor-pointer dark:text-white  ${activeTab === "about" ? "active" : "hover:bg-zinc-200 "}`} onClick={() => handleChangeActive('about')}><h1 className="text-md">About</h1></li>
                    
                    </Link>
                    <Link to="/projects">
                    <li className={`py-2 px-4  hover:cursor-pointer dark:text-white ${activeTab === "projects" ? "active" : "hover:bg-zinc-200"} `} onClick={() => handleChangeActive('projects')}><h1 className="text-md">Projects</h1></li>

                    </Link>
                    <Link to="/works">
                    <li className={`py-2 px-4 hover:cursor-pointer dark:text-white ${activeTab === "work" ? "active" : "hover:bg-zinc-200"}`} onClick={() => handleChangeActive('work')}><h1 className="text-md">Work</h1></li>
                    
                    </Link>
                    <Link to="/tools">
                    <li className={`py-2 px-4 hover:cursor-pointer dark:text-white ${activeTab === "tools" ? "active" : "hover:bg-zinc-200"}`} onClick={() => handleChangeActive('tools')}><h1 className="text-md">Tools</h1></li>
                    
                    </Link>
                </Tabs>
                {children}
            </div>
        </div>
    </div>
    )
}

export default Layout
