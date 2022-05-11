import { ADD_USER } from "../types"
import { NEW_USER } from "../types"

export const AddUser = (user) => ({
    type: ADD_USER,
    payload: user
})

export const NewUser = (user) => ({
    type: NEW_USER,
    payload: user
})