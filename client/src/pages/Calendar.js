import { connect } from "react-redux"
import EventDetails from "../components/EventDetails"


const Calendar = (props) => {

    return (
        <div>
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

export default connect(mapStateToProps, mapActionsToProps)(Calendar)