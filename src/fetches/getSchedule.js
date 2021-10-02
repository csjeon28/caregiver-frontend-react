import axios from 'axios'
import * as action from '../actions/scheduleActions'

function getSchedule(id) {
    return dispatch => {
        dispatch(action.getScheduleLoading())
        const url = `http://localhost:3001/parents/${id}/schedules`
        axios
            .get(url)
            .then(resp => {
                const scheduleList = resp.data
                dispatch(action.getSchedule(scheduleList))
            })
            .catch(error => dispatch(action.getScheduleFail(error)))
    }
}

export default getSchedule