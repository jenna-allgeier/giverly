import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import UserReducer from './reducers/UserReducer'
import AppReducer from './reducers/AppReducer'
import CalendarReducer from './reducers/CalendarReducer'


const store = createStore(
    combineReducers({ userState: UserReducer, appState: AppReducer, calendarState: CalendarReducer }), 
    composeWithDevTools(applyMiddleware(thunk))
    )

export default store