import React from "react";
import { Link, Outlet } from "react-router-dom";
import About from "../Footer/About";
import Contact from "../Footer/Contact";
import Help from "../Footer/Help";
import Courses from "../Header/Courses";
import Index from "../Header/Index";
import Result from "../Header/Results";


const Header = () => {

}

const Layout = () => {
    return 
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
    
} 

const Footer = () => {

}