import React from 'react'
import '../footer/Footer.css'

function Footer() {
    return (
        <>
            <footer className='footer-container'>
                <div className='footer-items'>

                    <div className='logo'>
                    <h1>Madhvi <span style={{ color: 'rgb(69, 69, 208)' }}> Malviya</span> </h1>
                    </div>
                    <div>
                        <ul>
                            <h3>Links</h3>
                            <li>Contacts</li>
                            <li>Address</li>
                            <li>About</li>
                            <li>Others</li>

                        </ul>
                    </div>

                    <div>

                        <ul>
                            <h3>Socials</h3>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                            <li>LinkedIn</li>

                        </ul>
                    </div>
                    <div className='subscribe'>
                        <h3>Sent an email to me</h3>
                        <input type='text' placeholder='Enter your email'></input>
                        <button>Sent</button>
                    </div>
                </div>

                <div className='copyrights'>
                    <p>Copyright © 2024 Madhvi . All Rights Reserved </p>
                </div>




            </footer>
        </>
    )
}

export default Footer