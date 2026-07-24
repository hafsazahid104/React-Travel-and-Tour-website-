import React from "react";
import './Cards.css'
export default function Cards({image,name,location,description}){
    return(
        <>
        <div className="cards">
            <img src={image} alt="img"/>
            <h2>{name}</h2>
            <p>{description}</p>
            <hr/>
            <h4>{location}</h4>
        </div>
        </>
    )
}