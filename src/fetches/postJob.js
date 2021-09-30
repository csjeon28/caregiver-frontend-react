import axios from 'axios'

function postJob(caregiverId, object) {
    const url = `http://localhost:3001/caregivers/${caregiverId}/jobs`
    // fetch(url, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json',
    //     'Authorization': `Bearer ${localStorage.getItem('token')}`,
    //   },
    //   body: JSON.stringify(object),
    // }).then(res => res.json())

    axios
        .post(url, {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        })
        .then(resp => {
            localStorage.setItem('token', resp.data.token)
        })
}

export default postJob
