import axios from 'axios';
import * as action from '../actions/jobActions'

function getCaregiverMatches(id) {
    return dispatch => {
        dispatch(action.getCaregiverMatchesLoading())
        const url = `http://localhost:3001/caregivers/${id}/jobs`
        axios
            .get(url)
            .then(resp => {
                const matchList = resp.data
                dispatch(action.getCaregiverMatches(matchList))
            })
            .catch(error => dispatch(action.getCaregiverMatchesFail(error)))
    };
}

function getParentMatches(id) {
    return dispatch => {
        dispatch(action.getParentMatchesLoading())
        const url = `http://localhost:3001/parents/${id}/jobs`
        axios
            .get(url)
            .then(resp => {
                const matchList = resp.data
                dispatch(action.getParentMatches(matchList))
            })
            .catch(error => dispatch(action.getParentMatchesFail(error)))
    }
}

export { getCaregiverMatches, getParentMatches }