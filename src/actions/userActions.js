export const userLoginLoading = () => ({
    type: 'USER_LOGIN_LOADING',
})

export const userLogin = (data, userType) => ({
    type: 'USER_LOGIN',
    payload: data,
    userType,
})

export const userLoginFail = error => ({
    type: 'USER_LOGIN_FAIL',
    payload: error,
})

export const userLogout = () => ({
    type: 'USER_LOGOUT',
})