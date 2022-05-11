import { CURRENT_USER, CREATE_USERNAME, CREATE_USERPASSWORD, REGISTER_USERNAME, REGISTER_USERPASSWORD } from "../types"

const initialState = {
    user: {
        username: 'Jeff - logged in',
        password: '12345'
    },
    createUsername: '',
    createUserPassword: '',
    registerUsername: '',
    registerUserPassword: '',
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case CURRENT_USER:
            return { ...state, user: [...state.user, action.payload] }
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