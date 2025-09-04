import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <Link to={"/about"}>About</Link>
        <Link to={"/help"}>Help</Link>
        <Link to={"/contact"}>Contact</Link>
        </div>
    )
}

export default Footer;