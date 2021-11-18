const initialState = {
    jobs: '',
    requestedJobs: '',
    error: '',
}

const jobData = (state = initialState, action) => {
    switch (action.type) {
        case 'JOB_FAIL':
            return { ...state, error: action.payload }
        case 'POST_JOB':
            return { jobs: [...state.jobs, action.payload] }
        case 'GET_JOB_LISTINGS':
            return { ...state, jobs: action.payload }
        case 'GET_ALL_JOBS':
            return { ...state, jobs: action.payload }
        case 'STORE_REQUESTED_JOBS':
            return { ...state, requestedJobs: action.payload }
        case 'POST_JOB_REQUEST':
            return { ...state, requestedJobs: [...state.requestedJobs, { job_id: action.job_id }] }
        case 'GET_JOB_REQUESTS':
            return { ...state, requestedJobs: action.payload }
        default:
            return state
    }
}

export default jobData
