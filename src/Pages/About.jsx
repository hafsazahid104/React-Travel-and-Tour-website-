import React from 'react'
import './About.css'
import Image from '../Components/PageImage'
export default function About(){
    return(
    <main>
    <Image heading="About" />
    <about className='aboutDetail'>
        <div>
        <h2>Our History</h2>
        <br/>
        <p className='para'>Trippy was created with the idea of making travel planning simple,
        enjoyable, and accessible for everyone. We noticed that travelers <br/>often
        struggle to find reliable information, exciting destinations, and easy
         trip planning in one place. Trippy was built to solve this <br/>
         problem by providing a user-friendly platform that helps people 
            discover, plan, and enjoy memorable journeys.</p>
        <br/>
        <h2>Our Mission</h2>
        <br/>
        <p className='para'>Our mission is to make travel easier by providing a
             seamless platform where users can explore destinations,
              plan trips, and create <br/> unforgettable
             travel experiences with confidence and convenience.</p>
        <br/>
        <h2>Our Vision</h2>
        <br/>
        <p className='para'>Our vision is to become a trusted global travel platform that 
            inspires people to explore the world, discover new cultures, 
            and <br/> make every journey meaningful, affordable, and
             memorable.</p>
        <br/>
        </div>
    </about>
    </main>
    )
}