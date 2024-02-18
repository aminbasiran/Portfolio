import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Navlinks = () => {

    const [active,setActive] = useState("about")

    const handleChangeActive = (value) => {
        if( value === active){
            return
        }

        setActive(value)
    }


    return (
        <>
            <ul className='list-none flex flex-row gap-2 justify-center my-3'>
                <li onClick={()=>handleChangeActive("about")} className={`${active==="about" ? "border-b-2 border-black" : ""} font-semibold px-3 py-2 cursor-pointer hover:bg-zinc-200 text-xs transition-all duration-500 ease-in-out`}>About</li>
                <li onClick={()=>handleChangeActive("projects")} className={`${active==="projects" ? "border-b-2 border-black" : ""} font-semibold px-3 py-2 cursor-pointer hover:bg-zinc-200 text-xs transition-all duration-500 ease-in-out`}>Projects</li>
                <li onClick={()=>handleChangeActive("work")} className={`${active==="work" ? "border-b-2 border-black" : ""} font-semibold px-3 py-2 cursor-pointer hover:bg-zinc-200 text-xs transition-all duration-500 ease-in-out`}>Work</li>
                <li onClick={()=>handleChangeActive("tools")} className={`${active==="tools" ? "border-b-2 border-black" : ""} font-semibold px-3 py-2 cursor-pointer hover:bg-zinc-200 text-xs transition-all duration-500 ease-in-out`}>Tools</li>
            </ul>
        </>
    )
}

export default Navlinks
