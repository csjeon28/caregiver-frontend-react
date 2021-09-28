import axios from 'axios'
import * as action from '../actions/userActions'

function userSignup(loginInfo, userType) {
    return dispatch => {
        const url = `https://localhost:3001/${userType}s`;
        // fetch(url, {
        axios
            .post(url, loginInfo, {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
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
