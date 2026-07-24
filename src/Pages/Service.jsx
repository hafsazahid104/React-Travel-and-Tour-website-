import React from 'react'
import './Service.css'
import Cards from '../Components/Cards'
import Image from '../Components/PageImage'
import {Data} from '../Data/AllData.jsx'

export default function Service(){
    return(
    <main>
        <Image heading="Service" />
        <div className='card'>
        <div>
            <h2>Recent Trips</h2>
            <p>You can discover unique destinations</p>
        </div>
        <div className='carditems'>
        {Data.map((item ,index) => (
            <Cards  key={index} 
            image={item.image} 
            name={item.name} 
            description={item.description} 
            location={item.location}/>
        ))}
        </div>
        </div>
        
    </main>
    )
}