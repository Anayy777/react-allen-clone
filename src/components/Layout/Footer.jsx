import React from "react";
import { Link } from "react-router-dom";
import '../Styles/footer.css'


const Footer = () => {
    return (
        <div className="footer">
           
            <div>
               <h4>About</h4>
               <ul className="list-1">
                    <li><Link to={"/about"}>About Us</Link></li>
                    <li><Link to={"/about"}>Blog</Link></li>
                    <li><Link to={"/about"}>News</Link></li>
               </ul>
            </div>
            <div>
               <h4>Help & Support</h4>
               <ul className="list-2">
                    <li><Link to={"/help"}>Refund Policy</Link></li>
                    <li><Link to={"/help"}>Transfer Policy</Link></li>
                    <li><Link to={"/help"}>Contact Us</Link></li>
               </ul>
            </div>
            <div>
                <h4>Courses</h4>
                <ul className="list-3">
                    <li><Link to={"/courses"}>Online Course</Link></li>
                    <li><Link to={"/courses"}>Distance Series</Link></li>
                    <li><Link to={"/courses"}>Online Test Series</Link></li>
               </ul>
            </div>
            <div>
                <h4>Popular Goals</h4>
                <ul className="list-4">
                    <li><Link to={"/goals"}>NEET Coaching</Link></li>
                    <li><Link to={"/goals"}>JEE Coaching</Link></li>
                    <li><Link to={"/goals"}>6th To 10th</Link></li>
               </ul>
            </div>
        
        </div>
    )
}

export default Footer;