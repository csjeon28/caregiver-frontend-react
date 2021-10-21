import axios from 'axios';
import * as action from '../actions/jobActions'
import { API_ROOT } from '../constants/index'

function getCaregiverMatches(id) {
    return dispatch => {
        const url = `${API_ROOT}/caregivers/${id}/jobs`
        axios
            .get(url)
            .then(resp => { dispatch(action.getCaregiverMatches(resp.data)) })
            .catch(error => dispatch(action.getCaregiverMatchesFail(error)))
    };
}

function getParentMatches(id) {
    return dispatch => {
        const url = `${API_ROOT}/parents/${id}/jobs`
        axios
            .get(url)
            .then(resp => dispatch(action.getParentMatches(resp.data)))
            .catch(error => dispatch(action.getParentMatchesFail(error)))
    }
}

export { getCaregiverMatches, getParentMatches }