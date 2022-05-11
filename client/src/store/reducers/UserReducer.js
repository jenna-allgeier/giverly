import { CURRENT_USER, NEW_USER } from "../types"

const initialState = {
    user: {
        username: 'Jeff - logged in'
    },
    newUser: {
        username: 'Jenna - registered'
    }
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case CURRENT_USER:
            return { ...state, user: [...state.user, action.payload] }
        case NEW_USER:
            return { ...state, newUser: action.payload }
        default:
            return { ...state }
    }
}

export default UserReducer