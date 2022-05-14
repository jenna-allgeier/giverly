import {
    ADD_EVENT_TITLE, ADD_EVENT_DSCRP, ADD_EVENT_START,
    ADD_EVENT_END, ADD_EVENT_IMAGE, ALL_EVENTS,
    UPDATE_EVENT_TITLE, UPDATE_EVENT_DSCRP, UPDATE_EVENT_START,
    UPDATE_EVENT_END, UPDATE_EVENT_IMAGE
} from "../types"

const initialState = {
    addEventTitle: '',
    addEventDscrp: '',
    addEventStart: '',
    addEventEnd: '',
    addEventImage: '',
    updateEventTitle: '',
    updateEventDscrp: '',
    updateEventStart: '',
    updateEventEnd: '',
    updateEventImage: '',
    allEvents: [],
}

const CalendarReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_EVENT_TITLE:
            return { ...state, addEventTitle: action.payload }
        case ADD_EVENT_DSCRP:
            return { ...state, addEventDscrp: action.payload }
        case ADD_EVENT_START:
            return { ...state, addEventStart: action.payload }
        case ADD_EVENT_END:
            return { ...state, addEventEnd: action.payload }
        case ADD_EVENT_IMAGE:
            return { ...state, addEventImage: action.payload }
        case UPDATE_EVENT_TITLE:
            return { ...state, updateEventTitle: action.payload }
        case UPDATE_EVENT_DSCRP:
            return { ...state, updateEventDscrp: action.payload }
        case UPDATE_EVENT_START:
            return { ...state, updateEventStart: action.payload }
        case UPDATE_EVENT_END:
            return { ...state, updateEventEnd: action.payload }
        case UPDATE_EVENT_IMAGE:
            return { ...state, updateEventImage: action.payload }
        case ALL_EVENTS:
            return { ...state, allEvents: action.payload }
        default:
            return { ...state }
    }
}

export default CalendarReducer