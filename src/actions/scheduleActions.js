export const getScheduleLoading = () => ({
    type: 'GET_SCHEDULE_LOADING',
})

export const getSchedule = data => ({
    type: 'GET_SCHEDULE',
    payload: data,
})

export const getScheduleFail = error => ({
    type: 'GET_SCHEDULE_FAIL',
    payload: error,
})