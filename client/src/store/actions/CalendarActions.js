import { CreateEvent, GetEventsByUserId, GetAllEvents, UpdateEvent } from "../../services/Cal"
import {
    ADD_EVENT_TITLE, ADD_EVENT_DSCRP, ADD_EVENT_START,
    ADD_EVENT_END, ADD_EVENT_IMAGE, ALL_EVENTS, UPDATE_EVENT_TITLE,
    UPDATE_EVENT_DSCRP, UPDATE_EVENT_START, UPDATE_EVENT_END,
    UPDATE_EVENT_IMAGE,
} from "../types"

export const LoadAllEvents = (userId) => {
    return async (dispatch) => {
        try {
            const getEventList = await GetAllEvents()
            let eventList = getEventList.filter((event) => {
                return event.user_id === parseInt(userId)
            })
            dispatch({
                type: ALL_EVENTS,
                payload: eventList
            })
        } catch (error) {
            throw error
        }
    }
}

export const LoadEventsByUserId = (userId) => {
    return async (dispatch) => {
        try {
            const events = await GetEventsByUserId(userId)
            dispatch({
                type: ALL_EVENTS,
                payload: events
            })
        } catch (error) {
            throw error
        }
    }
}

export const AddEvent = (event) => {
    return async () => {
        try {
            await CreateEvent(event)
        } catch (error) {
            throw error
        }
    }
}

export const SendUpdateEvent = (event) => {
    return async () => {
        try {
            console.log(event.id)
            await UpdateEvent(event.id, event)
            console.log(event)
        } catch (error) {
            throw error
        }
    }
}

export const AddEventTitle = (event) => ({
    type: ADD_EVENT_TITLE,
    payload: event
})

export const AddEventDscrp = (event) => ({
    type: ADD_EVENT_DSCRP,
    payload: event
})

export const AddEventStart = (event) => ({
    type: ADD_EVENT_START,
    payload: event
})

export const AddEventEnd = (event) => ({
    type: ADD_EVENT_END,
    payload: event
})

export const AddEventImage = (event) => ({
    type: ADD_EVENT_IMAGE,
    payload: event
})

export const UpdateEventTitle = (event) => ({
    type: UPDATE_EVENT_TITLE,
    payload: event
})

export const UpdateEventDscrp = (event) => ({
    type: UPDATE_EVENT_DSCRP,
    payload: event
})

export const UpdateEventStart = (event) => ({
    type: UPDATE_EVENT_START,
    payload: event
})

export const UpdateEventEnd = (event) => ({
    type: UPDATE_EVENT_END,
    payload: event
})

export const UpdateEventImage = (event) => ({
    type: UPDATE_EVENT_IMAGE,
    payload: event
})