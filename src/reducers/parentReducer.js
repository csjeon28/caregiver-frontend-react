const initialState = {
    parents: '',
    error: '',
}

const parentData = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PARENTS':
            return { ...state, parents: action.payload }
        case 'GET_PARENTS_FAIL':
            return { ...state, error: action.payload, parents: '' }
        default:
            return state
    }
}

export default parentData