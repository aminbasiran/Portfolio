import React, {useEffect} from 'react'
import Layout from '../components/layout/Layout'

const About = () => {

    return (
        <Layout>
            <div>
                <h1 className='text-center text-3xl font-bold mb-6 dark:text-white'>A brief summary</h1>
                <img src="https://pbs.twimg.com/profile_banners/923529004052652032/1659092924/1500x500" className='my-5' alt="" />
                <div className='mx-auto'>
                    <p className='text-left mb-4  text-sm text-gray-500 font-medium'>Starting my career off with Principal Asset Management Berhad (PAMB) as a Junior Business Process Engineer specializing in integrating Robotic Processes Automation (RPA) into business models in order to maximize workload without human intervention. We managed to deploy a successfully operated program with several stakeholders and the projection of several projects to follow suit that was in the process.</p>
                    <p className='text-left mb-4 text-sm text-gray-500 font-medium'>Left PAMB and joined DHL APSSC as a Junior Associate in Data Management dept. with 1+ years of experience specializes in SVC's outbound and inbound. During the time, my team and I managed to accelerate a staggering number of France Export Backlogs shipments at custom through a systemcalled DHL Central Engine (DCE).</p>
                    <p className='text-left mb-4 text-sm text-gray-500 font-medium'>Finding passion in writing codes, I decided to break my way into the industry learning, improving and self-progressing each and every day. I focus on front-end developing at the moment. While coding is all fun, I started to dive into data analytics as well by immersing in SQL, Tableau and python. Having the knowledges in these area, I have created several small portfolio projects for each of the tools(you can find them on my 𝗚𝗶𝘁𝗵𝘂𝗯 account). I believe that finding solutions on the internet doesn't make me a bad programmer because it actually helped me a lot to understand and figure out my own work around to apply to my code.  These are the tools that I know and able to work around: 𝗛𝗧𝗠𝗟𝟱, 𝗖𝗦𝗦𝟯, 𝗝𝗮𝘃𝗮𝘀𝗰𝗿𝗶𝗽𝘁, 𝗧𝗮𝗶𝗹𝘄𝗶𝗻𝗱𝗖𝗦𝗦, 𝗣𝘆𝘁𝗵𝗼𝗻, 𝗦𝗾𝗹 𝗮𝗻𝗱 𝗚𝗶𝘁. Currently learning and exploring 𝗥𝗲𝗮𝗰𝘁.𝗷𝘀.</p>
                    <p className='text-left mb-4 text-sm text-gray-500 font-medium'>On the other hand, as an avid learner in language learning, I have always find myself immersed in Spanish, German and Swedish language. I am able understand contexts in these languages however with limited capability in speaking them. Regardless, practice makes improvement! With these 3 foreign languages, I found learning language opens up windows of vast opportunities to connect ourselves with people globally. Looking forward to use my ability in foreign languages at its fullest capacity in the future.</p>
                    <p className='text-left mb-4 text-sm text-gray-500 font-medium'>Currently I am actively seeking a front-end developer/data analyst/database engineer position and looking forward to gain more experiences and knowledges to equip myself to work with some of the best tech companies globally.</p>
                    <p className='text-left mb-4 text-sm text-gray-500 font-medium'>Feel free to contact me via <a href="https://example.com" target='_blank' rel="noopener noreferrer"><strong className='text-black dark:text-white'>LinkedIn</strong></a>  or <a href="https://example.com" target='_blank' rel="noopener noreferrer"><strong className='text-black dark:text-white'>Email</strong></a>. I'm always looking forward for an insightful conversations or working opportunities!</p>
                </div>
            </div>
        </Layout>
    )
}

export default About

