import { combineReducers } from 'redux'
import userData from './userReducer'
import parentData from './parentReducer'
import jobData from './jobReducer'
import caregiverData from './caregiverReducer'

const rootReducer = combineReducers({
    userData,
    parentData,
    jobData,
    caregiverData
})

export default rootReducer