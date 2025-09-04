import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

    return(
        <div style={{
            display : "grid",
            gridAutoFlow : "column" , 
            gridAutoColumns : "1fr" 
        }}>
            <Link to={"/"}>{<img
        src= "https://yt3.googleusercontent.com/eYL1nv41lFYd7d49CW9VwIutXmWTJueXlf7d8-qUgwsNQVRwNK_nsq-UUuUkOvLxnJOEird9AWk=s900-c-k-c0x00ffffff-no-rj"
        alt="logo"
        height={"40px"}
        style={{cursor : "pointer"}}
      />}</Link>
            <Link to={"courses"}>Courses</Link>
            <Link to={"/results"}>Results</Link>
        </div>
    )

}

export default Header;