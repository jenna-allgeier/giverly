import { CURRENT_USERNAME, CURRENT_USERPASSWORD, CREATE_USERNAME, CREATE_USERPASSWORD, 
    REGISTER_USERNAME, REGISTER_USERPASSWORD } from "../types"

export const AddUsername = (user) => ({
    type: CURRENT_USERNAME,
    payload: user
})

export const AddUserPassword = (password) => ({
    type: CURRENT_USERPASSWORD,
    payload: password
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