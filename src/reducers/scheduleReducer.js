const initialState = {
    schedule: '',
    loading: false,
    error: ''
}

const scheduleData = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_SCHEDULE_LOADING':
            return { ...state, loading: true, error: '' }
        case 'GET_SCHEDULE':
            return { ...state, loading: false, schedule: action.payload }
        case 'GET_SCHEDULE_FAIL':
            return { ...state, loading: false, error: action.payload, schedule: '' }
        default:
            return state
    }
}

export default scheduleData