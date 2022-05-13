import {
    ADD_EVENT_TITLE, ADD_EVENT_DSCRP, ADD_EVENT_START,
    ADD_EVENT_END, ADD_EVENT_IMAGE, ADD_EVENT
} from "../types"

// export const AddEvent = () => {
//     return async (dispatch) => {
//         try {
//             const event = await CreateEvent(data)
//             dispatch({
//                 type: ADD_EVENT,
//                 payload: event
//             })
//         } catch (error) {
//             throw error
//         }
//     }
// }

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