import React, { useState } from "react";
import './Header.css'
import {Link,NavLink} from 'react-router-dom'
import {FaInfoCircle,FaSuitcase,FaUserCircle,FaBars} from 'react-icons/fa';
import {FaHouse, FaXmark} from 'react-icons/fa6'
export default function Header(){
    let [menuOpen, setMenu] = useState(false);
    return(
        <>
        <header className="header">
        <nav className="navBar">
            <h1 id="logo">Trippy</h1>
            <div className={menuOpen ? "navItemsActive":"navItems"}>
                <div className={menuOpen ? "itemsActive":"items"}>
                <NavLink to=''><FaHouse/> Home</NavLink>
                <NavLink to='/about'><FaInfoCircle />About</NavLink>
                <NavLink to='/service'><FaSuitcase/> Service</NavLink>
                <NavLink to='/contact'><FaUserCircle/>  Contact</NavLink>
                <button className="btn1">Sign Up</button>
                </div>
            </div>
            <button className="menuBtn" onClick={() => setMenu(!menuOpen)}>
                {menuOpen ? <FaXmark/> : <FaBars/>}
            </button>
        </nav>
        </header>
        </>
    )
}
