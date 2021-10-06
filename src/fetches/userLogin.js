import axios from 'axios'
import * as action from '../actions/userActions'
import { API_ROOT, HEADERS } from '../constants/index'

function userLogin(loginInfo, userType) {
    return dispatch => {
        // change to heroku after dploying
        const url = `${API_ROOT}/${userType}/login`
        axios
            .post(url, loginInfo, {
                headers: {
                    HEADERS,
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                }
            })
            .then(resp => {
                localStorage.setItem('token', resp.data.token)
                localStorage.setItem('usertype', userType)
                dispatch(action.userLogin(resp.data, userType))
            })
            .catch(error => dispatch(action.userLoginFail(error)))
    }
}

export default userLogin