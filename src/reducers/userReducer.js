const initialState = {
    user: '',
    isLoggedIn: false,
    loading: false,
    error: '',
    userType: '',
}

const userData = (state = initialState, action) => {
    switch (action.type) {
        case 'USER_LOGIN_LOADING': {
            return { ...state, loading: true, isLoggedIn: false }
        }
        case 'USER_LOGIN': {
            return {
                ...state,
                loading: false,
                isLoggedIn: true,
                user: action.payload,
                userType: action.userType,
            }
        }
        case 'USER_LOGIN_FAIL':
            return {
                ...state,
                loading: false,
                isLoggedIn: false,
                error: action.payload,
            }
        case 'USER_LOGOUT': {
            localStorage.clear()
            return { ...state, isLoggedIn: false, user: '', userType: '' }
        }
        default:
            return state
    }
}

export default userData