import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import UserReducer from './reducers/UserReducer'
import AppReducer from './reducers/AppReducer'

const store = createStore(
    combineReducers({ userState: UserReducer, appState: AppReducer }), 
    composeWithDevTools()
    )

export default store