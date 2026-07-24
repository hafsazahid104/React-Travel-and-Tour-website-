import React from 'react'
import './Contact.css'
export default function Contact(){
    return(
        <main>
            <section className='contact'>
                <div className='contactHeading'>
                    <h1 id='h1'>Contact</h1>
                </div>
            </section>
            <section className='form'>
                <h2>Send a Message To Us</h2>
                <br></br>
                <form>
                    <div className='formItems'>
                    <input type='text' placeholder='Name' className='input'/>
                    <input type='text' placeholder='Email' className='input'/>
                    <input type='text' placeholder='Subject'className='input'/>
                    <textarea placeholder='Message' rows={6} cols={6}/>
                    <button id='sendBtn'>Send Message</button>
                    </div>
                </form>
            </section>
        </main>
    );
}