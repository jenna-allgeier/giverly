import { connect } from "react-redux"
import { useNavigate } from 'react-router-dom';


const EventDetails = (props) => {

let navigate = useNavigate()

const navigateToUpdate = (eventId) => {
    navigate(`/update-event/${eventId}`)
}
    
    return (
        <div>
            <div className="eventDetails">
                        {props.calendarState.allEvents.map((eventDetail) => {
                            return (
                                <div className="eventDetail">
                                    <h1>{eventDetail.title}</h1>
                                    <h3>{eventDetail.description}</h3>
                                    <img className='image' src={eventDetail.image}
                                    alt='event image'/>
                                    <button className="button" onClick={() => navigateToUpdate(eventDetail.id)}>Edit</button>
                                </div>
                            );
                        })}
                    </div>
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

export default connect(mapStateToProps, mapActionsToProps)(EventDetails)