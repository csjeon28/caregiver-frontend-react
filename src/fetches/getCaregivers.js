import axios from 'axios'
import * as action from '../actions/caregiverActions'
import { API_ROOT } from '../constants/index'

function getCaregivers() {
    return dispatch => {
        const url = `${API_ROOT}/caregivers`
        axios
            .get(url)
            .then(resp => dispatch(action.getCaregivers(resp.data)))
            .catch(error => dispatch(action.getCaregiversFail(error.response.data.errors)))
    }
}

export default getCaregivers