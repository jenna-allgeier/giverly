import { CURRENT_USERNAME, CURRENT_USERPASSWORD, CREATE_USERNAME, CREATE_USERPASSWORD, 
    REGISTER_USERNAME, REGISTER_USERPASSWORD, CURRENT_USER_ID, ALL_USERS } from "../types"

const initialState = {
    currentUsername: '',
    currentUserPassword: '',
    currentUserId: '',
    createUsername: '',
    createUserPassword: '',
    registerUsername: '',
    registerUserPassword: '',
    allusers: [],
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case CURRENT_USERNAME:
            return { ...state, currentUsername: action.payload }
        case CURRENT_USERPASSWORD:
            return { ...state, currentUserPassword: action.payload }
        case CURRENT_USER_ID:
            return { ...state, currentUserId: action.payload }
        case ALL_USERS:
            return { ...state, allusers: action.payload }
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