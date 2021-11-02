import axios from 'axios';
import * as action from '../actions/jobActions'
import { API_ROOT, HEADERS } from '../constants/index'

function getJobListings(parentId) {
    return dispatch => {
        const url = `${API_ROOT}/parents/${parentId}/jobs`
        axios
            .get(url, {
                headers: HEADERS
            })
            .then(resp => dispatch(action.getJobListings(resp.data)))
    }
}

export default getJobListings