import React from 'react'
import CompoundCard from '../card/CompoundCard'
import { IoLogoFirebase } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { VscJson } from "react-icons/vsc";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import Layout from '../layout/Layout';



const Project = () => {
    return (
        <div>
            <h1 className='text-center text-4xl font-bold dark:text-white'>My Projects</h1>
            <p className='text-lg font-semibold mt-7  text-zinc-500'>Here are some of the projects I created over the years:</p>
            <CompoundCard>
                <CompoundCard.Tags>
                    <span className='text-[#67dbcc] font-semibold mr-2'>React</span>
                    <span className='text-[#67dbcc] font-semibold mr-2'>TailwindCSS</span>
                </CompoundCard.Tags>
                <CompoundCard.Title>amnbsrn.dev</CompoundCard.Title>
                <CompoundCard.Description>My personal portfolio web app that showcases my experiences with software engineering and web development. (You're here now)  </CompoundCard.Description>
                <CompoundCard.Tool>
                    <div><FaReact className='text-4xl'/></div>
                    <div><SiTailwindcss  className='text-4xl'/></div>
                </CompoundCard.Tool>
                
            </CompoundCard>
            <CompoundCard>
                <CompoundCard.Tags>
                    <span className='text-[#67dbcc] font-semibold mr-2'>React</span>
                    <span className='text-[#67dbcc] font-semibold mr-2'>TailwindCSS</span>
                    <span className='text-[#67dbcc] font-semibold mr-2'>Framer-Motion</span>
                </CompoundCard.Tags>
                <CompoundCard.Title>SquashHub.io</CompoundCard.Title>
                <CompoundCard.Description>A simple web app that compiles all available squash courts and stores across Malaysia using Squash-API that I created. </CompoundCard.Description>
                <CompoundCard.Tool>
                    <div><FaReact className='text-4xl'/></div>
                    <div><SiTailwindcss  className='text-4xl'/></div>
                    <div><TbBrandFramerMotion className='text-4xl'/></div>
                </CompoundCard.Tool>
                
            </CompoundCard>
            <CompoundCard>
                <CompoundCard.Tags>
                    <span className='text-[#67dbcc] font-semibold mr-2'>React</span>
                    <span className='text-[#67dbcc] font-semibold mr-2'>TailwindCSS</span>
                </CompoundCard.Tags>
                <CompoundCard.Title>Squash-API.io</CompoundCard.Title>
                <CompoundCard.Description>An API for squash enthusiasts that compiles all courts available locally. Created by me and hosted using json-server. Feel free to contribute to more courts in malaysia.  </CompoundCard.Description>
                <CompoundCard.Tool>
                    <div><VscJson className='text-4xl'/></div>
                </CompoundCard.Tool>
                
            </CompoundCard>
            <CompoundCard>
                <CompoundCard.Tags>
                    <span className='text-[#67dbcc] font-semibold mr-2'>React</span>
                    <span className='text-[#67dbcc] font-semibold mr-2'>TailwindCSS</span>
                    <span className='text-[#67dbcc] font-semibold'>Firebase</span>
                </CompoundCard.Tags>
                <CompoundCard.Title>TextMe.io</CompoundCard.Title>
                <CompoundCard.Description>A realtime chat app made using React, Tailwindcss and Firebase firestore for realtime data fetching across users. </CompoundCard.Description>
                <CompoundCard.Tool>
                    <div><FaReact className='text-4xl'/></div>
                    <div><SiTailwindcss   className='text-4xl'/></div>
                    <div><IoLogoFirebase  className='text-4xl'/></div>
                </CompoundCard.Tool>
                
            </CompoundCard>
            <CompoundCard>
                <CompoundCard.Tags>
                    <span className='text-[#67dbcc] font-semibold mr-2'>React</span>
                    <span className='text-[#67dbcc] font-semibold mr-2'>TailwindCSS</span>
                    <span className='text-[#67dbcc] font-semibold'>MongooseJS</span>
                    <span className='text-[#67dbcc] font-semibold'>MongoDB</span>
                </CompoundCard.Tags>
                <CompoundCard.Title>ExpenseTrackr</CompoundCard.Title>
                <CompoundCard.Description>An expense tracking app to manage and observe my spending. Using mongooseJS to interact with mongoDB.   </CompoundCard.Description>
                <CompoundCard.Tool>
                    <div><FaReact className='text-4xl'/></div>
                    <div><SiTailwindcss   className='text-4xl'/></div>
                    <div><SiMongodb  className='text-4xl'/></div>
                </CompoundCard.Tool>
                
            </CompoundCard>
            <CompoundCard>
                <CompoundCard.Tags>
                    <span className='text-[#67dbcc] font-semibold mr-2'>React</span>
                    <span className='text-[#67dbcc] font-semibold mr-2'>TailwindCSS</span>
                    <span className='text-[#67dbcc] font-semibold mr-2'>Axios</span>
                </CompoundCard.Tags>
                <CompoundCard.Title>React-axios Postman clone</CompoundCard.Title>
                <CompoundCard.Description>An API client testing platform powered by axios to make request for testing purposes made for backend-dev </CompoundCard.Description>
                <CompoundCard.Tool>
                    <div><FaReact className='text-4xl'/></div>
                    <div><SiTailwindcss className='text-4xl'/></div>
                </CompoundCard.Tool>
                
            </CompoundCard>
            
        </div>
    )
}

export default Project
