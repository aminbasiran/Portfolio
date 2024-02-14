import React from 'react'
import { TbBrandFramerMotion } from "react-icons/tb";


const toolsObj = [
    {
        tool : "Javascript",
        icon : "    ",
    },
    {
        tool : "CSS",
        icon : "",
    },
    {
        tool : "HTML",
        icon : "",
    },
    {
        tool : "Git",
        icon : "",
    },
    {
        tool : "Github",
        icon : "",
    },
    {
        tool : "TailwindCSS",
        icon : "",
    },
    {
        tool : "React",
        icon : "",
    },
    {
        tool : "NodeJS",
        icon : "",
    },
    {
        tool : "SCSS",
        icon : "",
    },
]

const Tool = () => {
    return (
        <div>
            <h1 className='text-center text-4xl font-bold mb-6 dark:text-white'>Tools under my belt</h1>
            <div className='grid grid-cols-3 gap-3 my-3'>

                {toolsObj.map(each => <TbBrandFramerMotion key={each.tool} className='text-6xl mx-auto' /> )}
                    

            </div>
            <p className='text-left mb-4 text-md text-gray-500 font-medium'>It's a thrilling journey through the digital realm, and my toolkit includes Node.js, React, TailwindCSS, Git and SASS.</p>
            <p className='text-left mb-4 text-md text-gray-500 font-medium'>Picture Node.js as the sturdy foundation upon which my digital creations rest. It's the backbone of reliability and performance that ensures users have seamless interactions. Now, let's talk about React—the magician's wand of JavaScript libraries. When it comes to creating interactive and dynamic user interfaces, React is my go-to tool. With it, I have the power to transform abstract ideas into tangible, user-friendly applications. Navigating through the complexities of modern web design becomes an art form, and React is my trusted brush. In the realm of styling, I wield SASS—a CSS preprocessor with finesse. It's not just about making web elements look good; it's about maintaining clean, modular, and easily maintainable code. My approach involves modular design principles, ensuring that my projects remain adaptable and ever-ready for evolution.</p>
            <p className='text-left mb-4 text-md text-gray-500 font-medium'>But what fuels this journey? It's an unyielding passion for web development that propels me forward. In this ever-changing landscape, I am committed to staying at the forefront of industry trends and best practices. It's a commitment that drives me to create websites that are not just visually stunning but also responsive, providing users with exceptional and unforgettable experiences.</p>
        </div>
    )
}

export default Tool
