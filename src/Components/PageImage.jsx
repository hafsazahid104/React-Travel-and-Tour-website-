import React from "react";
import './PageImage.css'
import about from '../assets/about.png'
export default function Image({heading}){
    return(
    <section className='about'>
        <img src={about} alt="image" />
        <h1>{heading}</h1>
    </section>
    )
} 