import axios from 'axios'
import * as action from '../actions/userActions'

function getAutoLogin(userType) {
    return dispatch => {
        dispatch(action.userLoginLoading())
        // change url to api when deployed to heroku
        const api_url = `http://localhost:3001/${userType}/auto_login`
        axios
            .get(api_url, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                }
            })
            .then(resp => dispatch(action.userLogin(resp.data, userType)))
            .catch(error => dispatch(action.userLoginFail(error)))
    }
}

export default getAutoLogin