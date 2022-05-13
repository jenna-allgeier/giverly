import { connect } from "react-redux"
import UserInfo from "../components/UserInfo";


const UserProfile = (props) => {

    return (
        <div>
            <UserInfo />
            <EventDetails />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {}
}

const mapActionsToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapActionsToProps)(UserProfile)