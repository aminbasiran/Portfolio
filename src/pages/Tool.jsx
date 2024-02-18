import React from 'react'
import { TbBrandFramerMotion } from "react-icons/tb";
import Layout from '../components/layout/Layout';
import sass_icon from "/sass.png"
import javascript_icon from "/js.png"
import css_icon from "/css-3.png"
import html_icon from "/html.png"
import react_icon from "/react.png"
import tailwind_icon from "/tailwind.png"
import python_icon from "/python.png"
import node_icon from "/nodejs.png"
import git_icon from "/git.png"
import github_icon from "/github.png"


const toolsObj = [
    {
        tool : "Javascript",
        icon : javascript_icon
    },
    {
        tool : "CSS",
        icon : css_icon
    },
    {
        tool : "HTML",
        icon : html_icon
    },
    {
        tool : "Git",
        icon : git_icon
    },
    {
        tool : "Github",
        icon : github_icon
    },
    {
        tool : "TailwindCSS",
        icon : tailwind_icon
    },
    {
        tool : "React",
        icon : react_icon
    },
    {
        tool : "NodeJS",
        icon : node_icon
    },
    {
        tool : "SASS",
        icon : sass_icon
    },
    {
        tool : "python",
        icon : python_icon
    },
]

const Tool = () => {
    return (

        <Layout>
                <div>
                    <h1 className='text-center text-3xl font-bold mb-6 dark:text-white'>Tools under my belt</h1>
                    <div className='grid grid-cols-3 gap-3 mt-3 my-8'>

                    {toolsObj.map(each => <div className='gap-2 flex flex-col justify-center place-items-center'><h1 className='text-sm font-semibold text-zinc-500'>{each.tool}</h1><div className="cursor-pointer w-16 transform hover:scale-75 transition-all duration-500 ease-in-out"><img  src={each.icon} alt={each.tool}/></div></div> )}
                            

                    </div>
                    <p className='text-left mb-4 text-sm text-gray-500 font-medium'>It's a thrilling journey through the digital realm, and my toolkit includes Node.js, React, TailwindCSS, Git and SASS.</p>
                    <p className='text-left mb-4 text-sm text-gray-500 font-medium'>Picture Node.js as the sturdy foundation upon which my digital creations rest. It's the backbone of reliability and performance that ensures users have seamless interactions. Now, let's talk about React—the magician's wand of JavaScript libraries. When it comes to creating interactive and dynamic user interfaces, React is my go-to tool. With it, I have the power to transform abstract ideas into tangible, user-friendly applications. Navigating through the complexities of modern web design becomes an art form, and React is my trusted brush. In the realm of styling, I wield SASS—a CSS preprocessor with finesse. It's not just about making web elements look good; it's about maintaining clean, modular, and easily maintainable code. My approach involves modular design principles, ensuring that my projects remain adaptable and ever-ready for evolution.</p>
                    <p className='text-left mb-4 text-sm text-gray-500 font-medium'>But what fuels this journey? It's an unyielding passion for web development that propels me forward. In this ever-changing landscape, I am committed to staying at the forefront of industry trends and best practices. It's a commitment that drives me to create websites that are not just visually stunning but also responsive, providing users with exceptional and unforgettable experiences.</p>
                </div>
        </Layout>
        
    )
}

export default Tool
