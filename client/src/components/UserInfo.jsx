import { connect } from "react-redux"

const UserInfo = (props) => {
    console.log(props)

    return (
        <div>
            <h1>{props.userState.user.username}</h1>
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

export default connect(mapStateToProps, mapActionsToProps)(UserInfo)