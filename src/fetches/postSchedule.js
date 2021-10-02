import axios from 'axios'

function postSchedule(parentId) {
    const url = `http://localhost:3001/parents/${parentId}/schedules`
        // fetch(url, {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //     Accept: 'application/json',
        //     Authorization: `Bearer ${localStorage.getItem('token')}`,
        //   },
        //   body: JSON.stringify(obj),
        // }).then(resp => resp.json())
        .post(url, {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        })
        .then(resp => {
            localStorage.setItem('token', resp.data.token)
        })
}

export default postSchedule