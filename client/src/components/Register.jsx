import { connect } from "react-redux"
import { CreateUsername, CreateUserPassword, RegisterUsername, RegisterUserPassword } from "../store/actions/UserActions"

const Register = (props) => {
    console.log(props)

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
        <div>
            <form action="">
                <input 
                    type="text"
                    name='username'
                    placeholder="username"
                    value={props.userState.createUsername}
                    onChange={handleUsernameChange}
                />
                <input 
                    type="text"
                    name='password'
                    placeholder="password"
                    value={props.userState.createUserPassword}
                    onChange={handlePasswordChange}
                />
                <button type="submit" onClick={handleSubmit}>
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