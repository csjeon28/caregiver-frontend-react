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
        // case 'UPDATE_PARENT':
        //     return state.map((s) => {
        //         if (s.id === action.payload.id) {
        //             return {
        //                 ...state, ...action.payload
        //             }
        //         } else {
        //             return s
        //         }
        //     })
        // case 'DELETE_PARENT':
        //     return state.filter(({ id }) => id !== action.payload.id)
        default:
            return state
    }
}

export default parentData