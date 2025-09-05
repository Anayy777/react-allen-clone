import React from "react";
import { Link } from "react-router-dom";
import '../Styles/header.css'
const Header = () => {

    return(
        <div className="header">
            <Link to={"/"}>{<img
        src= "https://yt3.googleusercontent.com/eYL1nv41lFYd7d49CW9VwIutXmWTJueXlf7d8-qUgwsNQVRwNK_nsq-UUuUkOvLxnJOEird9AWk=s900-c-k-c0x00ffffff-no-rj"
        alt="logo"
        height={"55px"}
        style={{cursor : "pointer" , paddingLeft : "20px"}}
      />}</Link>
            <Link to={"courses"}>Courses</Link>
            <Link to={"/results"}>Results</Link>
            <Link to={"/test"}>Test Series</Link>
            <Link to={"/classroom"}>Classroom</Link>
            <Link to={"/material"}>Study Material</Link>
            <Link to={"/scholarship"}>Scholarship</Link>
            <Link to={"/more"}>More</Link>
        </div>
    )

}

export default Header;