import { CURRENT_USER } from "../types"
import { NEW_USER } from "../types"

export const AddUser = (user) => ({
    type: CURRENT_USER,
    payload: user
})

export const RegisterUser = (newUser) => ({
    type: NEW_USER,
    payload: newUser
})