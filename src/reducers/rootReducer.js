import { combineReducers } from 'redux'
import userData from './userReducer'
import parentData from './parentReducer'
import jobData from './jobReducer'
import scheduleData from './scheduleReducer'

const rootReducer = combineReducers({
    userData,
    parentData,
    jobData,
    scheduleData
})

export default rootReducer