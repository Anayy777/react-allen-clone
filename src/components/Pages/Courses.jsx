import React from "react";
import img from "./img.avif";
import Card from "../Styles/card";
import "../Styles/card.css"

const Courses = () => {

  const Course = [
    {
      title : "Neet Courses" , 
      img : "https://asset.allen.in/4b516fee-c744-433e-9476-3cac4cd0cc0e/original.webp?__ar__=1.370115"
    } , 
    {
      title : "Jee Courses" , 
      img : "https://asset.allen.in/c07d22aa-0dec-402c-827f-424cef392ba9/original.webp?__ar__=1.372414"
    } , 
    {
      title : "Courses for class 6th-10th" , 
      img : "https://asset.allen.in/50fd06a0-4b73-4fda-abd2-c1dcc21c0229/original.webp?__ar__=1.372414"
    }
]
    return (
      <div>
        <div className="course-element-1">
          <img 
            src= {img} alt="shown-image"
            height={"40px"}
            style={{marginRight : "20px"}}
          />
          <div className="block-element">
            <p className="para-1">INDIA'S BIGGEST EXAM IS LIVE ✨</p>
            <p className="para-2">If your child is in Class 5th-10th , register for TALLENTEX now</p>
          </div>
          
        </div>
        <div className="course-h1">
           Pick the right course for you
        </div>
        <div className="card-component">
            {Course.map((course , index) => {
              return <Card
                key = {index} 
                title = {course.title}
                img = {course.img}
              />
            })}
        </div>
          
      </div>
   
    )
}


export default Courses;