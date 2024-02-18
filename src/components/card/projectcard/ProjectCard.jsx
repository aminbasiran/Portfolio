import React from 'react'
import Title from '../Title'
import Tool from '../Tool'
import Description from '../Description'
import Image from '../Image'
import Tags from '../Tags'
import Links from '../Links'
import Button from '../../button/Button'

const ProjectCard = ({children}) => {
    return (
        <div className='my-10'>
            {children}
        </div>
    )
}

ProjectCard.Title = Title
ProjectCard.Tool = Tool
ProjectCard.Description = Description
ProjectCard.Image = Image
ProjectCard.Tags = Tags
ProjectCard.Links = Links
ProjectCard.Button = Button

export default ProjectCard






