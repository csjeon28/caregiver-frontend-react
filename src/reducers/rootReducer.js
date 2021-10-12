import { combineReducers } from 'redux'
import userData from './userReducer'
import parentData from './parentReducer'
import jobData from './jobReducer'
import scheduleData from './scheduleReducer'
import caregiverData from './caregiverReducer'

const rootReducer = combineReducers({
    userData,
    parentData,
    jobData,
    scheduleData,
    caregiverData
})

export default rootReducer