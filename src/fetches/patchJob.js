import axios from 'axios'
import * as action from '../actions/jobActions'
import { API_ROOT, HEADERS } from '../constants/index'

function patchJob(selectedCand, parentId) {
    return dispatch => {
        const url = `${API_ROOT}/parents/${parentId}/jobs`
        axios
            .patch(url, selectedCand, {
                headers: HEADERS
            })
            .then(resp => {
                dispatch(action.patchJob(resp.data))
            })
    }
}

export default patchJob