import { GetAllUsers } from "../../services/Auth"
import { CURRENT_USERNAME, CURRENT_USERPASSWORD, CREATE_USERNAME, CREATE_USERPASSWORD, 
    REGISTER_USERNAME, REGISTER_USERPASSWORD, CURRENT_USER_ID, ALL_USERS } from "../types"

export const AllUsers = (username) => {
    return async (dispatch) => {
        try {
            const userList = await GetAllUsers()
            let currentUser = userList.find((user) => {
                return user.username === username
            })
            dispatch({
                type: CURRENT_USER_ID,
                payload: currentUser.id
            })
        } catch (error) {
            throw error
        }
    }
}

export const AddUsername = (user) => ({
    type: CURRENT_USERNAME,
    payload: user
})

export const AddUserPassword = (password) => ({
    type: CURRENT_USERPASSWORD,
    payload: password
})

export const AddUserId = (userId) => ({
    type: CURRENT_USER_ID,
    payload: userId
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