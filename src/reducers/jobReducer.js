const initialState = {
    jobs: '',
    loading: false,
    error: '',
}

const jobData = (state = initialState, action) => {
    switch (action.type) {
        // case 'GET_CAREGIVER_JOB_LOADING':
        //     return { ...state, loading: true, error: '' }
        case 'GET_CAREGIVER_JOB':
            return { ...state, loading: false, jobs: action.payload }
        case 'GET_CAREGIVER_JOB_FAIL':
            return { ...state, loading: false, error: action.payload, jobs: '' }
        // case 'GET_PARENT_JOB_LOADING':
        //     return { ...state, loading: true, error: '' }
        case 'GET_PARENT_JOB':
            return { ...state, loading: false, jobs: action.payload }
        case 'GET_PARENT_JOB_FAIL':
            return { ...state, loading: false, error: action.payload, jobs: '' }
        default:
            return state
    }
}

export default jobData
