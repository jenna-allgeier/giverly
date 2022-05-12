import { Link } from "react-router-dom";


const Navbar = (props) => {

    return (
        <header className="nav-header">
            <nav>
                <Link className="links welcome" to='/'>Home</Link>
                <Link className="links login-register" to='/login-register'>Login/Register</Link>
                <Link className="links calendar" to='/calendar'>Calendar</Link>
                <Link className="links welcome" to='/cart'>Cart</Link>
                {/* <Link className= "links profileLink" to={`/profile/${userId}`}>
                <img className="profilePic" src={`${props.userProfile.picture}`}></img>
                    Profile</Link> */}
            </nav>
        </header>
    )
}

export default Navbar