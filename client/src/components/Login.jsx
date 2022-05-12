import { connect } from "react-redux"
import { AddUsername, AddUserPassword } from "../store/actions/UserActions"

const Login = (props) => {

    const handleUsernameChange = (e) => {
        props.addUsername(e.target.value)
    }

    const handlePasswordChange = (e) => {
        props.addUserPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // check against credentials in backend
    }

    return (
        <div className="login-register-container">
            <h2>Login to Your Account</h2>
            <form className='login-register-form'>
                <input 
                    type="text"
                    className="input-field"
                    name='username'
                    placeholder="username"
                    value={props.userState.addUsername}
                    onChange={handleUsernameChange}
                />
                <input 
                    type="text"
                    className="input-field"
                    name='password'
                    placeholder="password"
                    value={props.userState.addUserPassword}
                    onChange={handlePasswordChange}
                />
                <button type="submit" className="button" onClick={handleSubmit}>
                    Login
                </button>
            </form>
        </div>
        
    )
}

const mapStateToProps = (state) => {
    return {
        userState: state.userState
    }
}

const mapActionsToProps = (dispatch) => {
    return {
        addUsername: (username) => dispatch(AddUsername(username)),
        addUserPassword: (password) => dispatch(AddUserPassword(password)),
    }
}

export default connect(mapStateToProps, mapActionsToProps)(Login)