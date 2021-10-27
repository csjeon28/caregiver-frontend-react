const initialState = {
    caregivers: '',
    error: '',
}

const caregiverData = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CAREGIVERS':
            return { ...state, caregivers: action.payload }
        case 'GET_CAREGIVERS_FAIL':
            return { ...state, error: action.payload, caregivers: '' }
        default:
            return state
    }
}

export default caregiverData