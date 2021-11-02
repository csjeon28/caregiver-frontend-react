const initialState = {
    jobs: '',
    error: '',
}

const jobData = (state = initialState, action) => {
    switch (action.type) {
        case 'POST_JOB':
            return { jobs: [...state.jobs, action.payload] }
        case 'GET_JOB_LISTINGS':
            return { ...state, jobs: action.payload }
        default:
            return state
    }
}

export default jobData
