import { connect } from "react-redux"
import Login from "../components/Login"
import Register from "../components/Register"


const LoginRegister = (props) => {

    return (
        <div className="login-register">
            <Login />
            <Register />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {}
}

const mapActionsToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapActionsToProps)(LoginRegister)