import React, { useState } from "react";
import {
    TETabs,
    TETabsContent,
    TETabsItem,
    TETabsPane,
} from "tw-elements-react";
import About from "../components/about/About";
import Work from "../components/work/Work";
import Project from "../components/project/Project";
import Tool from "../components/tool/Tool";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { WiSunrise } from "react-icons/wi";




const Main = () => {

    const [basicActive, setBasicActive] = useState("tab1");

    const handleBasicClick = (value) => {
        if (value === basicActive) {
            return;
        }
        setBasicActive(value);
    };


    return (
        <>
        <div className="hover:cursor-pointer">
            {true ? <WiSunrise className="mx-auto text-2xl "/> : <BsFillMoonStarsFill className="mx-auto"/>}
        </div>
        
        <h1 className=" text-5xl font-bold text-[#3A71CA]">amnbsrn.<span className="text-black">dev</span></h1>
        <div className="my-4">
            <FaLinkedin className="inline text-3xl"/>
            <FaGithubSquare className="inline text-3xl"/>
        </div>
        
        <div className="mb-3 mx-auto">
            <TETabs>
                <TETabsItem
                className=""
                onClick={() => handleBasicClick("tab1")}
                active={basicActive === "tab1"}
                >
                About
                </TETabsItem>
                <TETabsItem
                onClick={() => handleBasicClick("tab2")}
                active={basicActive === "tab2"}
                >
                Projects
                </TETabsItem>
                <TETabsItem
                onClick={() => handleBasicClick("tab3")}
                active={basicActive === "tab3"}
                >
                Works
                </TETabsItem>
                <TETabsItem
                onClick={() => handleBasicClick("tab4")}
                active={basicActive === "tab4"}
                >
                Tools
                </TETabsItem>
            </TETabs>

            <TETabsContent>
                <TETabsPane show={basicActive === "tab1"}><About/></TETabsPane>
                <TETabsPane show={basicActive === "tab2"}><Project/></TETabsPane>
                <TETabsPane show={basicActive === "tab3"}><Work/></TETabsPane>
                <TETabsPane show={basicActive === "tab4"}><Tool/></TETabsPane>
            </TETabsContent>
        </div>
    </>
    )
}

export default Main
