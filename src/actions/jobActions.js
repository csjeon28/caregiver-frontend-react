export const postJob = data => ({
    type: 'POST_JOB',
    payload: data
})

export const getCaregiverMatches = data => ({
    type: 'GET_CAREGIVER_JOB',
    payload: data,
})

export const getCaregiverMatchesFail = error => ({
    type: 'GET_CAREGIVER_JOB_FAIL',
    payload: error,
})

export const getParentMatches = data => ({
    type: 'GET_PARENT_JOB',
    payload: data,
})

export const getParentMatchesFail = error => ({
    type: 'GET_PARENT_JOB_FAIL',
    payload: error,
})