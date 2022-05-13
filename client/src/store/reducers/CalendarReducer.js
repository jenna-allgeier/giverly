import {
    ADD_EVENT_TITLE, ADD_EVENT_DSCRP, ADD_EVENT_START,
    ADD_EVENT_END, ADD_EVENT_IMAGE
} from "../types"

const initialState = {
    addEventTitle: '',
    addEventDscrp: '',
    addEventStart: '',
    addEventEnd: '',
    addEventImage: '',
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
        default:
            return { ...state }
    }
}

export default CalendarReducer