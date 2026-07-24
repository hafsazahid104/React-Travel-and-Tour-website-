import React from "react";
import './Footer.css'
import {FaInstagram,FaLinkedinIn,FaTwitter,FaFacebookF} from 'react-icons/fa'
export default function Footer(){
    return(
        <>
        <footer className="footer">
            <section className="footerSection">
            <div className="headOfFooter">
                <div>
                    <h4>Trippy</h4>
                    <p>Choose your Favourite Destination</p>
                </div>
                <div className="icons">
                    <button className="iconbtn"><FaFacebookF /></button>
                    <button className="iconbtn"><FaInstagram /></button>
                    <button className="iconbtn"><FaLinkedinIn /></button>
                    <button className="iconbtn"><FaTwitter /></button>
                </div>
            </div>
            <div className="footerDetail">
                <div className="detail1">
                <div>
                <h5>Project</h5>
                <p>ChangeLog <br/> Status <br/> License <br/> All Versions</p>
                </div>
                <div>
                <h5>Help</h5>
                <p>Support <br/> trouble shooting<br/> Contact Us</p>
                </div>
                </div>
                <div className="detail2">
                <div>
                <h5>Community</h5>
                <p>Github <br/> Issues <br/> Project <br/> Twitter</p>
                </div>
                <div>
                <h5>Others</h5>
                <p>Terms of service <br/> Privacy policy <br/> License</p>
                </div>
                </div>
            </div>
            </section>
        </footer>

        </>
    )
}