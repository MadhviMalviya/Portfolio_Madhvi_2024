import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <div className='navbar' >
                <div className='nav-logo'>
                    <h1>Madhvi Malviya</h1>
                </div>

                <div className='nav-items'>
                    <Link to='/' >Home</Link>
                    <Link to='/about' >About</Link>
                    <Link to='/contact' >Contact</Link>
                    <Link to='/projects' >Projects</Link>
                    <Link to='/feedback' >Feedback</Link>
                </div>
            </div>

        </>
    )
}

export default Navbar