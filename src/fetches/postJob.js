import { API_ROOT, HEADERS } from '../constants/index'

function postJob(parentId, object) {
    const url = `${API_ROOT}/parents/${parentId}/jobs`
    fetch(url, {
        method: 'POST',
        headers: {
            HEADERS,
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(object),
    }).then(resp => resp.json())

    // axios
    //     .post(url, {
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json',
    //             'Authorization': `Bearer ${localStorage.getItem('token')}`,
    //         }
    //     })
    //     .then(resp => {
    //         localStorage.setItem('token', resp.data.token)
    //     })
}

export default postJob
