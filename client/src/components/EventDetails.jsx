import { connect } from "react-redux"
import { Link } from 'react-router-dom';


const EventDetails = (props) => {


    
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
                                    <Link to='/update-event'>
                                    <button className="button">Edit</button>
                                    </Link>
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