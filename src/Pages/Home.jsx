import React from "react";
import './Home.css'
import Cards from '../Components/Cards'
import {Data} from '../Data/AllData.jsx'
import { DestinationData1,DestinationData2 } from "../Data/AllData.jsx";
import PopularDestinations from "../Components/PopularDestinations.jsx";
export default function Home(){
    return(
        <>
        <main>
            <section className="hero">
                <div className="heading">
                <h1 id="majorHeading">Your Journey Your Story</h1>
                <p className="detail">Choose Your Favourite Destination</p>
                <button className="btn2">Travel Plan</button>
                </div>
            </section>
            <section>
                <h2 id="mainheading">Popular Destinations</h2>
                <p id="subheading">Tours give you to see alot, within a time frame.</p>
                <PopularDestinations data = {DestinationData1} reverse={false} />
                <PopularDestinations data={DestinationData2} reverse={true} />
            </section>
            <section>
                <div className='card'>
                    <div>
                            <h2 id="">Recent Trips</h2>
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
            </section>
        </main>
        </>
    )
}