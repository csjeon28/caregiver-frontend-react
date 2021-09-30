import { combineReducers } from 'redux'
import userData from './userReducer'
import parentData from './parentReducer'
import jobData from './jobReducer'

const rootReducer = combineReducers({
    userData,
    parentData,
    jobData
})

export default rootReducer