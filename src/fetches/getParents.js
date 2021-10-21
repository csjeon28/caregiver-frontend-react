import axios from 'axios'
import * as action from '../actions/parentActions'
import { API_ROOT } from '../constants/index'

function getParents() {
    return dispatch => {
        const url = `${API_ROOT}/parents`
        axios
            .get(url)
            .then(resp => dispatch(action.getParents(resp.data)))
            .catch(error => dispatch(action.getParentsFail(error.response.data.errors)))
    }
}

export default getParents