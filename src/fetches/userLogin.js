import axios from 'axios'
import * as action from '../actions/userActions'

function userLogin(loginInfo, userType) {
    return dispatch => {
        dispatch(action.userLoginLoading())
        // change to heroku after dploying
        const url = `http://localhost:3001/${userType}/login`
        axios
            .post(url, loginInfo, {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            })
            .then(resp => {
                localStorage.setItem('token', resp.data.token)
                localStorage.setItem('usertype', userType)
                dispatch(action.userLogin(resp.data, userType))
            })
            .then(resp => console.log(resp.data))
            .catch(error => dispatch(action.userLoginFail(error)))
    }
}

export default userLogin