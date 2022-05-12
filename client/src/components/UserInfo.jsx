import { connect } from "react-redux"


const UserInfo = (props) => {

    return (
        <div>
            
            
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