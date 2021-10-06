import * as action from '../actions/userActions'
import { API_ROOT, HEADERS } from '../constants/index'

function userSignup(loginData, userType) {
    return dispatch => {
        const url = `${API_ROOT}/${userType}s`;
        fetch(url, {
            method: 'POST',
            headers: { HEADERS },
            body: JSON.stringify(loginData)
        })
            .then(resp => resp.json())
            .then(data => {
                localStorage.setItem('token', data.token)
                localStorage.setItem('usertype', userType)
                dispatch(action.userLogin(data))
            })
    }
}

export default userSignup
