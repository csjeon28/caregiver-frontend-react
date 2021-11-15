import { combineReducers } from 'redux'
import userData from './userReducer'
import parentData from './parentReducer'
import jobData from './jobReducer'
import caregiverData from './caregiverReducer'
import candidateData from './candidateReducer'

const rootReducer = combineReducers({
    userData,
    parentData,
    jobData,
    caregiverData,
    candidateData
})

export default rootReducer