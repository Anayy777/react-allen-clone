import React from "react";
import './card.css';

const Card = ({title , img}) => {
    return (
        <div className="course-card">
            <h2 className="h2-tag">{title}</h2>
            
            <a className="link" href="">View Courses &gt;</a>
            <img
            src={img} alt="image"
            height={"150px"}
            />

        </div>
    )
}

export default Card;