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
        case 'DELETE_PARENT':
            return { ...state, parents: [...state.parents.filter(p => p.id !== action.deleteParent)] }
        default:
            return state
    }
}

export default parentData