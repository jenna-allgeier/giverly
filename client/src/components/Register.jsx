import { connect } from "react-redux"
import { CreateUsername, CreateUserPassword, RegisterUsername, RegisterUserPassword } from "../store/actions/UserActions"

const Register = (props) => {

    const handleUsernameChange = (e) => {
        props.createUsername(e.target.value)
    }

    const handlePasswordChange = (e) => {
        props.createUserPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.registerUsername(props.userState.registerUsername)
        props.registerUserPassword(props.userState.registerUserPassword)
    }

    return (
        <div className="container">
            <h1>Don't Have an Account? Sign Up!</h1>
            <form className='form'>
                <input
                    type="text"
                    className="input-field"
                    name='username'
                    placeholder="username"
                    value={props.userState.createUsername}
                    onChange={handleUsernameChange}
                />
                <input
                    type="text"
                    className="input-field"
                    name='password'
                    placeholder="password"
                    value={props.userState.createUserPassword}
                    onChange={handlePasswordChange}
                />
                {/* add confirm password */}
                <button type="submit" className="button" onClick={handleSubmit}>
                    Register
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
        createUsername: (username) => dispatch(CreateUsername(username)),
        createUserPassword: (password) => dispatch(CreateUserPassword(password)),
        registerUsername: (username) => dispatch(RegisterUsername(username)),
        registerUserPassword: (password) => dispatch(RegisterUserPassword(password)),
    }
}

export default connect(mapStateToProps, mapActionsToProps)(Register)