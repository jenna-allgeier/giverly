import { connect } from "react-redux"
import { useNavigate } from "react-router-dom";


const Logout = (props) => {

    let navigate = useNavigate();

    const logout = () => {
        props.logout()
        navigate('/')
    }

    return (
        <div>
            <h1>Enjoy all your stress free gift giving!</h1>
            <button className="button" type="submit" onClick={logout}>Logout</button>
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
        logout: (user) => dispatch(Logout(user)),
    }
}

export default connect(mapStateToProps, mapActionsToProps)(Logout)