import React, {useState } from "react";
import Header from "../header/Header";
import Navlinks from "../navlinks/Navlinks";
import Footer from "../footer/Footer";
import Button from "../button/Button";



const Layout = ({children}) => {
    return (
        <div className="w-full h-full dark:bg-[#181619] transition-all duration-500 ease-in-out">
            <div className="max-w-[1000px] mx-auto my-0 p-8 ">
                <Layout.Header/>
                <Layout.Navlinks/>
                {children}
                <Layout.Footer/>
            </div>
        </div>
    )
}

Layout.Header = Header
Layout.Navlinks = Navlinks
Layout.Footer = Footer
// Layout.Button = Button

export default Layout
