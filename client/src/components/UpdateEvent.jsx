import { connect } from "react-redux"


const UpdateEvent = (props) => {


    
    return (
        <div>
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        calendarState: state.calendarState
    }
}

const mapActionsToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapActionsToProps)(UpdateEvent)