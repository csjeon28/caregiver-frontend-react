import axios from 'axios'
import * as action from '../actions/jobActions'
import { API_ROOT, HEADERS } from '../constants/index'

function postJobRequest(candidateData, caregiverId) {
    return dispatch => {
        const url = `${API_ROOT}/caregivers/${caregiverId}/candidates`
        axios
            .post(url, candidateData, {
                headers: {
                    HEADERS,
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                }
            })
            .then(resp => {
                localStorage.setItem('token', resp.data.token)
                dispatch(action.postJobRequest(resp.data, candidateData.candidate.job_id))

            })
            .catch(error => dispatch(action.jobFail(error)))
    }
}

export default postJobRequest
