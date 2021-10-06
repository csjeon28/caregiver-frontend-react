import axios from 'axios'
import * as action from '../actions/userActions'
import { API_ROOT, HEADERS } from '../constants/index'

function getAutoLogin(userType) {
    return dispatch => {
        // change url to api when deployed to heroku
        const api_url = `${API_ROOT}/${userType}/auto_login`
        axios
            .get(api_url, {
                headers: {
                    HEADERS,
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                }
            })
            .then(resp => dispatch(action.userLogin(resp.data, userType)))
            .catch(error => dispatch(action.userLoginFail(error)))
    }
}

export default getAutoLogin