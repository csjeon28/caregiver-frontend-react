import axios from 'axios'
import * as action from '../actions/jobActions'
import { API_ROOT, HEADERS } from '../constants/index'

function postJob(jobData, parentId) {
    return dispatch => {
        const url = `${API_ROOT}/parents/${parentId}/jobs`
        axios
            .post(url, jobData, {
                headers: {
                    HEADERS,
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                }
            })
            .then(resp => {
                localStorage.setItem('token', resp.data.token)
                dispatch(action.postNewJob(resp.data))
            })
    }
}

export default postJob
