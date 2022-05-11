import { connect } from "react-redux"

const Register = (props) => {
    console.log(props)

    return (
        <div>
            <h2>{props.userState.newUser.username}</h2>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        userState: state.userState
    }
}

const mapActionsToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapActionsToProps)(Register)