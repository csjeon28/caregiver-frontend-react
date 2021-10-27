const initialState = {
    jobs: '',
    error: '',
}

const jobData = (state = initialState, action) => {
    switch (action.type) {
        case 'POST_JOB':
            return { ...state, jobs: action.payload }
        case 'GET_CAREGIVER_JOB':
            return { ...state, jobs: action.payload }
        case 'GET_CAREGIVER_JOB_FAIL':
            return { ...state, error: action.payload, jobs: '' }
        case 'GET_PARENT_JOB':
            return { ...state, jobs: action.payload }
        case 'GET_PARENT_JOB_FAIL':
            return { ...state, error: action.payload, jobs: '' }
        default:
            return state
    }
}

export default jobData
