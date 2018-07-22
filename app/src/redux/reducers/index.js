import questionReducer from './questionReducer'
import authReducer from './authReducer'
import userReducer from './userReducer'

import { loadingBarReducer } from 'react-redux-loading'

import { combineReducers } from 'redux'

export default combineReducers({
    loadingBar: loadingBarReducer,
    questions: questionReducer,
    users: userReducer,
    auth: authReducer,
})