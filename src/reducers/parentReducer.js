const initialState = {
    parents: '',
    loading: false,
    error: '',
}

const parentData = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PARENTS_LOADING':
            return { ...state, loading: true, error: '' }
        case 'GET_PARENTS':
            return { ...state, loading: false, parents: action.payload }
        case 'GET_PARENTS_FAIL':
            return {
                ...state, loading: false, error: action.payload, parents: '',
            }
        default:
            return state
    }
}

export default parentData