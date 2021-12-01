const initialState = {
    jobs: [],
    requestedJobs: [],
    error: '',
}

const jobData = (state = initialState, action) => {
    switch (action.type) {
        case 'JOB_FAIL':
            return { ...state, error: action.payload }
        case 'POST_JOB':
            return { jobs: [...state.jobs, action.payload] }
        case 'PATCH_JOB':
            // let jobCopy = [...state.jobs.filter(job => job.id !== action.payload)]
            // return {
            //     ...state, jobs: [...jobCopy, action.payload]
            // }
            return { ...state, jobs: [...state.jobs.find(j => j.id === action.payload)] }
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
        // case 'REMOVE_CANDIDATE':
        //     console.log(state.jobs.filter(j => j.id !== action.id))
        //     return { ...state, requestedJobs: [...state.jobs.filter(job => job.id !== action.job_id)] }
        default:
            return state
    }
}

export default jobData