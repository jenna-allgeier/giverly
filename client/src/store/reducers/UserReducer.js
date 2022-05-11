import { ADD_USER, NEW_USER } from "../types"

const initialState = {
    user: {
        username: 'jeff.joy'
    },
    currentUser: {}
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return { ...state, user: [...state.user, action.payload] }
        case NEW_USER:
            return { ...state, currentUser: action.payload }
        default:
            return { ...state }
    }
}

export default UserReducer