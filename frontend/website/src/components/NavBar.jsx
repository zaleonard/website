import {Link} from "react-router-dom"
import "../css/NavBar.css"

function NavBar(){
    return(<nav className='nav-bar'>
        <div className='navbar-links'>
            <Link to='/' className='nav-link'>Home</Link>
            <Link to='/aboutme' className='nav-link'>About Me</Link>
            <Link to='/projects' className='nav-link'>Projects</Link>
            <Link to='/contact' className='nav-link'>Contact</Link>
        </div>
    </nav>
    )
}

export default NavBar