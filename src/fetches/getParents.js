import axios from 'axios'
import * as action from '../actions/parentActions'

function getParents() {
    return dispatch => {
        dispatch(action.getParentsLoading())
        const url = 'http://localhost:3001/parents'
        axios
            .get(url)
            .then(resp => {
                const parentsList = resp.data
                dispatch(action.getParents(parentsList))
            })
            .catch(error => dispatch(action.getParentsFail(error)))
    }
}

export default getParents