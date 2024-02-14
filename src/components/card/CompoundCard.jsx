import React from 'react'
import Title from './Title'
import Tool from './Tool'
import Description from './Description'
import Image from './Image'
import Tags from './Tags'

const CompoundCard = ({children}) => {
    return (
        <div className='my-10 border-b-2'>
            <img src="https://framerusercontent.com/images/YIsIxDJp7KydTuX29jMuAqKIE.jpg?scale-down-to=2048" alt="" />
            {children}
            <div className='hover:cursor-pointer'>
                <a href='https://github.com/aminbasiran' target='_blank' rel="noopener noreferrer">
                    <button className='bg-[#3A71CA] p-2 m-2 text-xs font-semibold text-white'> View Github</button>
                </a>
            </div>
        </div>
    )
}

CompoundCard.Title = Title
CompoundCard.Tool = Tool
CompoundCard.Description = Description
CompoundCard.Image = Image
CompoundCard.Tags = Tags

export default CompoundCard






