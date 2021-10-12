export const getCaregiversLoading = () => ({
    type: 'GET_CAREGIVERS_LOADING',
})

export const getCaregivers = data => ({
    type: 'GET_CAREGIVERS',
    payload: data,
})

export const getCaregiversFail = error => ({
    type: 'GET_CAREGIVERS_FAIL',
    payload: error,
})
