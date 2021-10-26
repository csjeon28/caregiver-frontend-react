import axios from 'axios'
import * as action from '../actions/userActions'
import { API_ROOT, HEADERS } from '../constants/index'

function userSignup(loginData, userType) {
    return dispatch => {
        const url = `${API_ROOT}/${userType}s`
        axios
            .post(url, loginData, {
                headers: HEADERS
            })
            .then(resp => {
                localStorage.setItem('token', resp.data.token)
                localStorage.setItem('usertype', userType)
                dispatch(action.userLogin(resp.data, userType))
            })
    }
}

export default userSignup