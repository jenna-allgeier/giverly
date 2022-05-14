import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { connect } from "react-redux"
import Calendar from 'react-calendar'
import {
    AddEvent, AddEventTitle, AddEventDscrp, AddEventStart, AddEventEnd,
    AddEventImage, LoadAllEvents
} from '../store/actions/CalendarActions'


const AppCalendar = (props) => {

    const [value, onChange] = useState(new Date());

    const handleEventTitle = (e) => {
        props.addEventTitle(e.target.value)
    }

    const handleEventDscrp = (e) => {
        props.addEventDscrp(e.target.value)
    }

    const handleEventStart = (e) => {
        props.addEventStart(e.target.value)
    }

    const handleEventEnd = (e) => {
        props.addEventEnd(e.target.value)
    }

    const handleEventImage = (e) => {
        props.addEventImage(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        let event = {
            user_id: props.userState.currentUserId,
            title: props.calendarState.addEventTitle,
            description: props.calendarState.addEventDscrp,
            start_time: props.calendarState.addEventStart,
            end_time: props.calendarState.addEventEnd,
            image: props.calendarState.addEventImage,
        }
        props.addEvent(event)
    }

    useEffect(() => {
        console.log('loading all events')
        props.loadAllEvents(props.userState.currentUserId)
    }, [])


    return (
        <div className='calendar-container'>

            <div>
                <Calendar className={'calendar'}
                    onChange={onChange}
                    value={value} />
            </div>

            <div className='container'>
                <h1>Add Your Events</h1>
                <form className='form'>
                    <input
                        type="text"
                        className="input-field"
                        name='title'
                        placeholder="title"
                        value={props.calendarState.addEventTitle}
                        onChange={handleEventTitle}
                    />
                    <input
                        type="text"
                        className="input-field"
                        name='description'
                        placeholder="description"
                        value={props.calendarState.addEventDscrp}
                        onChange={handleEventDscrp}
                    />
                    <label>Start Date</label>
                    <input
                        type="date"
                        className="input-field"
                        name='start-date'
                        value={props.calendarState.addEventStart}
                        onChange={handleEventStart}
                    />
                    <label>End Date</label>
                    <input
                        type="date"
                        className="input-field"
                        name='end-date'
                        value={props.calendarState.addEventEnd}
                        onChange={handleEventEnd}
                    />
                    <input
                        type="text"
                        className="input-field"
                        name='image'
                        placeholder="image"
                        value={props.calendarState.addEventImage}
                        onChange={handleEventImage}
                    />
                    <button type="submit" className="button" onClick={handleSubmit}>
                        Add Event
                    </button>
                </form>

                <div>
                    <h1></h1>
                    <Link to='/event-details'>
                    <button className='button'>All Your Events</button>
                    </Link>
                </div>

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
        addEvent: (event) => dispatch(AddEvent(event)),
        addEventTitle: (event) => dispatch(AddEventTitle(event)),
        addEventDscrp: (event) => dispatch(AddEventDscrp(event)),
        addEventStart: (event) => dispatch(AddEventStart(event)),
        addEventEnd: (event) => dispatch(AddEventEnd(event)),
        addEventImage: (event) => dispatch(AddEventImage(event)),
        loadAllEvents: (userId) => dispatch(LoadAllEvents(userId)),
    }
}

export default connect(mapStateToProps, mapActionsToProps)(AppCalendar)