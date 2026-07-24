import bali from '../assets/bali.jpg'
import london from '../assets/london.webp'
import eifel from '../assets/eifel.webp'
import destination1 from '../assets/destination1.webp'
import destination2 from '../assets/destination2.webp'
import destination3 from '../assets/destination3.webp'
import destination4 from '../assets/destination4.webp'
export const  Data = [
    {image: bali,
     name:"Bali Beach",
     description:"Relax on Bali's golden beaches, enjoy crystal-clear waters, and witness breathtaking sunsets in a tropical paradise.",
     location:"#Bali#Indonasia"
    },
    {image: london,
     name:"London",
     description:"Discover London's rich history, famous landmarks, vibrant streets, and unforgettable experiences in  city.",
     location:"#London#United Kingdom"
    },
    {image: eifel,
     name:"Eifel Tower",
     description:"Explore the iconic Eiffel Tower and enjoy stunning views, romantic vibes, and the timeless beauty of Paris.",
     location:"#Eifel#Paris"
    }
]

export const DestinationData1 = [
    {
        image1: destination1,
        image2: destination2,
        place: "Cinque Terre, Italy",
        aboutPlace: ( <>Italy is a dream destination known for its breathtaking coastlines,<br/> colorful seaside villages, historic landmarks, and world-famous<br/> culture. From the stunning Amalfi Coast to the charming streets<br/> Terre, every destination offers spectacular views, delicious <br/>cuisine, and unforgettable experiences for every traveler.</>),
        reverse: false
    }
]

 export const DestinationData2 = [   
    {
        image1: destination3,
        image2: destination4,
        place: "Interlaken, Switzerland",
        aboutPlace: (<>Interlaken is one of Switzerland's most breathtaking travel destinations,<br/> offering a perfect blend of majestic mountains, crystal-clear lakes, and<br/> unforgettable adventures. Explore stunning alpine landscapes,and<br/> exciting outdoor activities that make every journey truly memorable.</>),
        reverse: true
    }

]