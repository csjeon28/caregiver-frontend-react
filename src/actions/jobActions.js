export const postNewJob = data => ({
    type: 'POST_JOB',
    payload: data
})

export const getJobListings = data => ({
    type: 'GET_JOB_LISTINGS',
    payload: data
})
