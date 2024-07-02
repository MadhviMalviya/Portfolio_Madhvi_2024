import React from 'react'
import '../footer/Footer.css'

function Footer() {
    return (
        <>
            <footer className='footer-container'>
                <div className='footer-items'>

                    <div>
                    <h2>Madhvi <span style={{ color: 'rgb(69, 69, 208)' }}> Malviya</span> </h2>
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
                        <h3>Subscribe for the News Letter</h3>
                        <input type='text' placeholder='Enter your email'></input>
                        <button>Subscribe</button>
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