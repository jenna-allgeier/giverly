import { CURRENT_USERNAME, CURRENT_USERPASSWORD, CREATE_USERNAME, CREATE_USERPASSWORD, 
    REGISTER_USERNAME, REGISTER_USERPASSWORD } from "../types"

const initialState = {
    currentUsername: '',
    currentUserPassword: '',
    createUsername: '',
    createUserPassword: '',
    registerUsername: '',
    registerUserPassword: '',
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case CURRENT_USERNAME:
            return { ...state, currentUsername: action.payload }
        case CURRENT_USERPASSWORD:
            return { ...state, currentUserPassword: action.payload }
        case CREATE_USERNAME:
            return { ...state, createUsername: action.payload }
        case CREATE_USERPASSWORD:
            return { ...state, createUserPassword: action.payload }
        case REGISTER_USERNAME:
            return { ...state, registerUsername: state.createUsername, createUsername: '' }
        case REGISTER_USERPASSWORD:
            return { ...state, registerUserPassword: state.createUserPassword, createUserPassword: '' }
        default:
            return { ...state }
    }
}

export default UserReducer