import {
    ADD_EVENT_TITLE, ADD_EVENT_DSCRP, ADD_EVENT_START,
    ADD_EVENT_END, ADD_EVENT_IMAGE
} from "../types"

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