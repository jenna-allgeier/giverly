import { useNavigate } from 'react-router-dom'
import { connect } from "react-redux"
import {
    UpdateEventTitle, UpdateEventDscrp, UpdateEventStart, UpdateEventEnd,
    UpdateEventImage,
} from '../store/actions/CalendarActions'


const UpdateEvent = (props) => {

    let navigate = useNavigate();

    const handleEventTitle = (e) => {
        props.updateEventTitle(e.target.value)
    }

    const handleEventDscrp = (e) => {
        props.updateEventDscrp(e.target.value)
    }

    const handleEventStart = (e) => {
        props.updateEventStart(e.target.value)
    }

    const handleEventEnd = (e) => {
        props.updateEventEnd(e.target.value)
    }

    const handleEventImage = (e) => {
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
        props.updateEvent(event)
        navigate('/calendar')
    }


    return (
        <div className='update-event'>
            <div className='container'>
                <h1>Edit Your Event</h1>
                <form className='form'>
                    <input
                        type="text"
                        className="input-field"
                        name='title'
                        placeholder="title"
                        value={props.calendarState.updateEventTitle}
                        onChange={handleEventTitle}
                    />
                    <input
                        type="text"
                        className="input-field"
                        name='description'
                        placeholder="description"
                        value={props.calendarState.updateEventDscrp}
                        onChange={handleEventDscrp}
                    />
                    <label>Start Date</label>
                    <input
                        type="date"
                        className="input-field"
                        name='start-date'
                        value={props.calendarState.updateEventStart}
                        onChange={handleEventStart}
                    />
                    <label>End Date</label>
                    <input
                        type="date"
                        className="input-field"
                        name='end-date'
                        value={props.calendarState.updateEventEnd}
                        onChange={handleEventEnd}
                    />
                    <input
                        type="text"
                        className="input-field"
                        name='image'
                        placeholder="image"
                        value={props.calendarState.updateEventImage}
                        onChange={handleEventImage}
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
    }
}

export default connect(mapStateToProps, mapActionsToProps)(UpdateEvent)