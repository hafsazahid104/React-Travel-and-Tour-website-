import React from "react";
import './PopularDestination.css'
export default function PopularDestinations({data,reverse}){
    return(
    <section className="dest">
        {data.map((item,index) => (
        <div className={reverse ? "destination1" : "destination2"} key={index}>
            {console.log(reverse)}
            <div id="detail">
                <h3>{item.place}</h3>
                <p>{item.aboutPlace}</p>
            </div>
            <div className="images">
                <img src={item.image1} alt="image" id="img1" className="travelimg"/>
                <img src={item.image2} alt="image" id="img2" className="travelimg"/>
            </div>
        </div>
        ))}
     </section>
    )
}