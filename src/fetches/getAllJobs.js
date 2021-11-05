import axios from 'axios';
import * as action from '../actions/jobActions'
import { API_ROOT, HEADERS } from '../constants/index'

function getAllJobs() {
    return dispatch => {
        const url = `${API_ROOT}/all-jobs`
        axios
            .get(url, {
                headers: HEADERS
            })
            .then(resp => dispatch(action.getAllJobs(resp.data)))
    }
}

export default getAllJobs