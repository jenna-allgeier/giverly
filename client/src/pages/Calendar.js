import { useState } from 'react'
import { connect } from "react-redux"
import EventDetails from "../components/EventDetails"
import Calendar from 'react-calendar'



const AppCalendar = (props) => {

    const [value, onChange] = useState(new Date());

    return (
        <div className='calendar-container'>
            
            <div>
                <Calendar className={'calendar'} onChange={onChange} value={value} />
            </div>
            <h2>Add Your Events</h2>
            <div className='events-container'>
                <EventDetails />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {}
}

const mapActionsToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapActionsToProps)(AppCalendar)