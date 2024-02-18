import React from 'react'
import ProjectCard from '../components/card/projectcard/ProjectCard'
import { IoLogoFirebase } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { VscJson } from "react-icons/vsc";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import Layout from '../components/layout/Layout';

const Project = () => {
    return (
        <Layout>
            <div>
                    <h1 className='text-center text-3xl font-bold dark:text-white mb-2'>Personal Projects</h1>
                    <p className='text-lg font-semibold   text-zinc-500'>Here are some of the projects I created over the years:</p>
                    <ProjectCard>
                        <ProjectCard.Tags>
                            <span className='text-[#67dbcc] font-semibold mr-2'>React</span>
                            <span className='text-[#67dbcc] font-semibold mr-2'>TailwindCSS</span>
                        </ProjectCard.Tags>
                        <ProjectCard.Image image=""/>
                        <ProjectCard.Title>amnbsrn.dev</ProjectCard.Title>
                        
                        <ProjectCard.Description>My personal portfolio web app that showcases my experiences with software engineering and web development. (You're here now)  </ProjectCard.Description>
                        <ProjectCard.Tool>
                            <div><FaReact className='text-4xl'/></div>
                            <div><SiTailwindcss  className='text-4xl'/></div>
                        </ProjectCard.Tool>
                        <a href="https://github.com/aminbasiran/Portfolio" target="_blank" rel="noopener noreferrer"><ProjectCard.Button>View Github</ProjectCard.Button></a>
                        
                        
                    </ProjectCard>
                    <ProjectCard>
                        <ProjectCard.Tags>
                            <span className='text-[#67dbcc] font-semibold mr-2'>React</span>
                            <span className='text-[#67dbcc] font-semibold mr-2'>TailwindCSS</span>
                            <span className='text-[#67dbcc] font-semibold mr-2'>Framer-Motion</span>
                        </ProjectCard.Tags>
                        <ProjectCard.Title url='https://squash-hub.netlify.app'>SquashHub.io</ProjectCard.Title>
                        <ProjectCard.Description>A simple web app that compiles all available squash courts and stores across Malaysia using Squash-API that I created. </ProjectCard.Description>
                        <ProjectCard.Tool>
                            <div><FaReact className='text-4xl'/></div>
                            <div><SiTailwindcss  className='text-4xl'/></div>
                            <div><TbBrandFramerMotion className='text-4xl'/></div>
                        </ProjectCard.Tool>
                        <a href="https://github.com/aminbasiran/squash-court-react-tailwind" target="_blank" rel="noopener noreferrer"><ProjectCard.Button>View Github</ProjectCard.Button></a>
                    </ProjectCard>
                    <ProjectCard>
                        <ProjectCard.Tags>
                            <span className='text-[#67dbcc] font-semibold mr-2'>React</span>
                            <span className='text-[#67dbcc] font-semibold mr-2'>TailwindCSS</span>
                        </ProjectCard.Tags>
                        <ProjectCard.Title>Squash-API.io</ProjectCard.Title>
                        <ProjectCard.Description>An API for squash enthusiasts that compiles all courts available locally. Created by me and hosted using json-server. Feel free to contribute to more courts in malaysia.  </ProjectCard.Description>
                        <ProjectCard.Tool>
                            <div><VscJson className='text-4xl'/></div>
                        </ProjectCard.Tool>
                        <a href="https://github.com/aminbasiran/squash-API" target="_blank" rel="noopener noreferrer"><ProjectCard.Button>View Github</ProjectCard.Button></a>
                        
                    </ProjectCard>
                    <ProjectCard>
                        <ProjectCard.Tags>
                            <span className='text-[#67dbcc] font-semibold mr-2'>React</span>
                            <span className='text-[#67dbcc] font-semibold mr-2'>TailwindCSS</span>
                            <span className='text-[#67dbcc] font-semibold'>Firebase</span>
                        </ProjectCard.Tags>
                        <ProjectCard.Title>TextMe.io</ProjectCard.Title>
                        <ProjectCard.Description>A realtime chat app made using React, Tailwindcss and Firebase firestore for realtime data fetching across users. </ProjectCard.Description>
                        <ProjectCard.Tool>
                            <div><FaReact className='text-4xl'/></div>
                            <div><SiTailwindcss   className='text-4xl'/></div>
                            <div><IoLogoFirebase  className='text-4xl'/></div>
                        </ProjectCard.Tool>
                        <a href="" target="_blank" rel="noopener noreferrer"><ProjectCard.Button>View Github</ProjectCard.Button></a>
                    </ProjectCard>
                    <ProjectCard>
                        <ProjectCard.Tags>
                            <span className='text-[#67dbcc] font-semibold mr-2'>React</span>
                            <span className='text-[#67dbcc] font-semibold mr-2'>TailwindCSS</span>
                            <span className='text-[#67dbcc] font-semibold'>MongooseJS</span>
                            <span className='text-[#67dbcc] font-semibold'>MongoDB</span>
                        </ProjectCard.Tags>
                        <ProjectCard.Title>ExpenseTrackr</ProjectCard.Title>
                        <ProjectCard.Description>An expense tracking app to manage and observe my spending. Using mongooseJS to interact with mongoDB.   </ProjectCard.Description>
                        <ProjectCard.Tool>
                            <div><FaReact className='text-4xl'/></div>
                            <div><SiTailwindcss   className='text-4xl'/></div>
                            <div><SiMongodb  className='text-4xl'/></div>
                        </ProjectCard.Tool>
                        <a href="" target="_blank" rel="noopener noreferrer"><ProjectCard.Button>View Github</ProjectCard.Button></a>
                    </ProjectCard>
                    <ProjectCard>
                        <ProjectCard.Tags>
                            <span className='text-[#67dbcc] font-semibold mr-2'>React</span>
                            <span className='text-[#67dbcc] font-semibold mr-2'>TailwindCSS</span>
                            <span className='text-[#67dbcc] font-semibold mr-2'>Axios</span>
                        </ProjectCard.Tags>
                        <ProjectCard.Title>React-axios Postman clone</ProjectCard.Title>
                        <ProjectCard.Description>An API client testing platform powered by axios to make request for testing purposes made for backend-dev </ProjectCard.Description>
                        <ProjectCard.Tool>
                            <div><FaReact className='text-4xl'/></div>
                            <div><SiTailwindcss className='text-4xl'/></div>
                        </ProjectCard.Tool>
                        <a href="" target="_blank" rel="noopener noreferrer"><ProjectCard.Button>View Github</ProjectCard.Button></a>
                    </ProjectCard>
                    
                </div>
        </Layout>
        
    )
}

export default Project
