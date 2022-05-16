import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AddUsername, AddUserPassword, AddUserId, 
    AllUsers, SendLogin } from "../store/actions/UserActions";

const Login = (props) => {

    let navigate = useNavigate();

    const handleUsernameChange = (e) => {
        props.addUsername(e.target.value)

    }

    const handlePasswordChange = (e) => {
        props.addUserPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // check against credentials in backend
        props.allUsers(props.userState.currentUsername)
        let user = {
            username: props.userState.currentUsername,
            password: props.userState.currentUserPassword
        }
        console.log(user)
        props.sendLogin(user)
        navigate('/')
    }

    return (
        <div className="container">
            <h1>Login to Your Account</h1>
            <form className='form'>
                <input
                    type="text"
                    className="input-field"
                    name='username'
                    placeholder="username"
                    value={props.userState.currentUsername}
                    onChange={handleUsernameChange}
                />
                <input
                    type="text"
                    className="input-field"
                    name='password'
                    placeholder="password"
                    value={props.userState.currentUserPassword}
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
        addUserId: (userId) => dispatch(AddUserId(userId)),
        allUsers: (user) => dispatch(AllUsers(user)),
        sendLogin: (user) => dispatch(SendLogin(user)),
    }
}

export default connect(mapStateToProps, mapActionsToProps)(Login)