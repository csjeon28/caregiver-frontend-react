export const jobFail = error => ({
    type: 'JOB_FAIL',
    payload: error,
})

export const postNewJob = data => ({
    type: 'POST_JOB',
    payload: data
})

export const getJobListings = data => ({
    type: 'GET_JOB_LISTINGS',
    payload: data
})

export const getAllJobs = data => ({
    type: 'GET_ALL_JOBS',
    payload: data
})

export const storeRequestedJobs = data => ({
    type: 'STORE_REQUESTED_JOBS',
    payload: data
})

export const postJobRequest = data => ({
    type: 'POST_JOB_REQUEST',
    job_id: data.data.job_id
})

export const getJobRequests = data => ({
    type: 'GET_JOB_REQUESTS',
    payload: data
})
