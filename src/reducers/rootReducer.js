import { combineReducers } from 'redux'
import userData from './userReducer'
import parentData from './parentReducer'

const rootReducer = combineReducers({
    userData,
    parentData
})

export default rootReducer