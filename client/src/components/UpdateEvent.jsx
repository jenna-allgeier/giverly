import { useNavigate } from 'react-router-dom'
import { connect } from "react-redux"
import {
    UpdateEventTitle, UpdateEventDscrp, UpdateEventStart, UpdateEventEnd,
    UpdateEventImage, SendUpdateEvent
} from '../store/actions/CalendarActions'


const UpdateEvent = (props) => {

    let navigate = useNavigate();

    const handleUpdateEventTitle = (e) => {
        props.updateEventTitle(e.target.value)
    }

    const handleUpdateEventDscrp = (e) => {
        props.updateEventDscrp(e.target.value)
    }

    const handleUpdateEventStart = (e) => {
        props.updateEventStart(e.target.value)
    }

    const handleUpdateEventEnd = (e) => {
        props.updateEventEnd(e.target.value)
    }

    const handleUpdateEventImage = (e) => {
        props.updateEventImage(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        let event = {
            user_id: props.userState.currentUserId,
            title: props.calendarState.updateEventTitle,
            description: props.calendarState.updateEventDscrp,
            start_time: props.calendarState.updateEventStart,
            end_time: props.calendarState.updateEventEnd,
            image: props.calendarState.updateEventImage,
        }
        props.sendUpdateEvent( event)
        navigate('/calendar')
    }


    return (
        <div>
            <div className='container'>
                <h1>Edit Your Event</h1>
                <form className='form'>
                    <input
                        type="text"
                        className="input-field"
                        name='title'
                        placeholder="title"
                        // value={props.calendarState.addEventTitle}
                        onChange={handleUpdateEventTitle}
                    />
                    <input
                        type="text"
                        className="input-field"
                        name='description'
                        placeholder="description"
                        // value={props.calendarState.addEventDscrp}
                        onChange={handleUpdateEventDscrp}
                    />
                    <label>Start Date</label>
                    <input
                        type="date"
                        className="input-field"
                        name='start-date'
                        // value={props.calendarState.addEventStart}
                        onChange={handleUpdateEventStart}
                    />
                    <label>End Date</label>
                    <input
                        type="date"
                        className="input-field"
                        name='end-date'
                        // value={props.calendarState.addEventEnd}
                        onChange={handleUpdateEventEnd}
                    />
                    <input
                        type="text"
                        className="input-field"
                        name='image'
                        placeholder="image"
                        // value={props.calendarState.addEventImage}
                        onChange={handleUpdateEventImage}
                    />
                    <button type="submit" className="button" onClick={handleSubmit}>
                        Submit Changes
                    </button>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        calendarState: state.calendarState,
        userState: state.userState
    }
}

const mapActionsToProps = (dispatch) => {
    return {
        updateEventTitle: (event) => dispatch(UpdateEventTitle(event)),
        updateEventDscrp: (event) => dispatch(UpdateEventDscrp(event)),
        updateEventStart: (event) => dispatch(UpdateEventStart(event)),
        updateEventEnd: (event) => dispatch(UpdateEventEnd(event)),
        updateEventImage: (event) => dispatch(UpdateEventImage(event)),
        sendUpdateEvent: (event) => dispatch(SendUpdateEvent(event)),
    }
}

export default connect(mapStateToProps, mapActionsToProps)(UpdateEvent)