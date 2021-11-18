import axios from 'axios'
import * as action from '../actions/jobActions'
import { API_ROOT, HEADERS } from '../constants/index'

function getJobRequests(caregiverId) {
    return dispatch => {
        const url = `${API_ROOT}/caregivers/${caregiverId}/candidates`
        axios
            .get(url, {
                headers: HEADERS
            })
            .then(resp => dispatch(action.getJobRequests(resp.data)))
            .catch(error => dispatch(action.jobFail(error)))
    }
}

export default getJobRequests
