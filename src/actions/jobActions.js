export const getCaregiverMatchesLoading = () => ({
    type: 'GET_CAREGIVER_JOB_LOADING',
})

export const getCaregiverMatches = data => ({
    type: 'GET_CAREGIVER_JOB',
    payload: data,
})

export const getCaregiverMatchesFail = error => ({
    type: 'GET_CAREGIVER_JOB_FAIL',
    payload: error,
})

export const getParentMatchesLoading = () => ({
    type: 'GET_PARENT_JOB_LOADING',
})

export const getParentMatches = data => ({
    type: 'GET_PARENT_JOB',
    payload: data,
})

export const getParentMatchesFail = error => ({
    type: 'GET_PARENT_JOB_FAIL',
    payload: error,
})