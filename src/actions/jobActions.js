export const getCaregiverMatchesLoading = () => ({
    type: 'GET_CAREGIVER_MATCHES_LOADING',
})

export const getCaregiverMatches = data => ({
    type: 'GET_CAREGIVER_MATCHES',
    payload: data,
})

export const getCaregiverMatchesFail = error => ({
    type: 'GET_CAREGIVER_MATCHES_FAIL',
    payload: error,
})

export const getParentMatchesLoading = () => ({
    type: 'GET_PARENT_MATCHES_LOADING',
})

export const getParentMatches = data => ({
    type: 'GET_PARENT_MATCHES',
    payload: data,
})

export const getParentMatchesFail = error => ({
    type: 'GET_PARENT_MATCHES_FAIL',
    payload: error,
})