import { connect } from "react-redux"


const UserInfo = (props) => {

    return (
        <div>
            <h2>{props.userState.user.username}</h2>
            
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