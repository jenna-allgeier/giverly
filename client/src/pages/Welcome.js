import { connect } from "react-redux"
import logo from '../logo.png';
import { Link } from 'react-router-dom'


const Welcome = (props) => {

    return (
        <div>
            <header className="App-header">
                <h1 className="welcome">Welcome to giverly!</h1>
                <Link to='login-register'>
                    <img src={logo} className="App-logo" alt="logo" />
                </Link>
            </header>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {}
}

const mapActionsToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapActionsToProps)(Welcome)

