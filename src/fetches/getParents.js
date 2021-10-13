import axios from 'axios'
import * as action from '../actions/parentActions'

function getParents() {
    return dispatch => {
        dispatch(action.getParentsLoading())
        const url = 'http://localhost:3001/parents'
        axios
            .get(url)
            .then(resp => dispatch(action.getParents(resp.data)))
            .catch(error => dispatch(action.getParentsFail(error.response.data.errors)))
    }
}

export default getParents