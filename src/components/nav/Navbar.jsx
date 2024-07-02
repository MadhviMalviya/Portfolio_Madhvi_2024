import { Link } from 'react-router-dom'
import "../nav/Navbar.css"


function Navbar() {
    return (
        <>
            <div className='navbar-container' >
                
                <div className='logo'>
                <h1>Madhvi <span style={{ color: 'rgb(130, 130, 220)' }}> Malviya</span> </h1>
                {/* <h1>Madhvi <span style={{ color: 'rgb(69, 69, 208)' }}> Malviya</span> </h1> */}
                </div>

                <input type="checkbox" id="hamburger-checkbox" className="hamburger-checkbox" />
                <label htmlFor="hamburger-checkbox" className="hamburger">&#9776;</label>
     
                
                <div className='nav-items'>
                    <Link to='/' >Home</Link>
                    <Link to='/about' >About</Link>
                    <Link to='/projects' >Projects</Link>
                    <Link to='/experience'>Experience</Link>
                    <Link to='/skills'>Skills</Link>
                    <Link to='/contact' >Contact</Link>
                    {/* <Link to='/feedback' >Feedback</Link> */}
                </div>
               
            
            </div>

        </>
    )
}

export default Navbar