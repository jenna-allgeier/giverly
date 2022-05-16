import { Link } from "react-router-dom";


const Navbar = (props) => {

    return (
        <header className="nav-header">
            <nav>
                <Link className="links" to='/'>Home</Link>
                <Link className="links" to='/calendar'>Calendar</Link>
                <Link className="links" to='/cart'>Cart</Link>
                <Link className="links" to='/login-register'>Login/Register</Link>
                <Link className="links" to='/logout'>Logout</Link>
            </nav>
        </header>
    )
}

export default Navbar