import axios from 'axios'
import * as action from '../actions/caregiverActions'

function getCaregivers() {
    return dispatch => {
        dispatch(action.getCaregiversLoading())
        const url = 'http://localhost:3001/caregivers'
        axios
            .get(url)
            .then(resp => dispatch(action.getCaregivers(resp.data)))
            .catch(error => dispatch(action.getCaregiversFail(error.response.data.errors)))
    }
}

export default getCaregivers