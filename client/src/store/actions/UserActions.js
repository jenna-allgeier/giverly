import { CURRENT_USER, CREATE_USERNAME, CREATE_USERPASSWORD, REGISTER_USERNAME, REGISTER_USERPASSWORD } from "../types"

export const AddUser = (user) => ({
    type: CURRENT_USER,
    payload: user
})

export const CreateUsername = (username) => ({
    type: CREATE_USERNAME,
    payload: username
})

export const CreateUserPassword = (password) => ({
    type: CREATE_USERPASSWORD,
    payload: password
})

export const RegisterUsername = (username) => ({
    type: REGISTER_USERNAME,
    payload: username
})

export const RegisterUserPassword = (password) => ({
    type: REGISTER_USERPASSWORD,
    payload: password
})