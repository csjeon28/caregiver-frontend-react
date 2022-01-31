import axios from 'axios'
import * as action from '../actions/parentActions'
import { API_ROOT } from '../constants/index'

function deleteParent(parentId) {
    return dispatch => {
        const url = `${API_ROOT}/parents/${parentId}`
        axios
            .delete(url)
            .then(resp => dispatch(action.deleteParent(resp.data)))
    }
}

export default deleteParent