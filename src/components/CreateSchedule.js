import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import postSchedule from '../fetches/postSchedule'

const CreateSchedule = ({ user }) => {
    const [schedule, setSchedule] = useState({
        start_date: '',
        end_date: '',
    })

    const handleChange = e => {
        const { name, value } = e.target
        setSchedule({ ...schedule, [name]: value })
    }
    const type = 'schedule'

    const handleSubmit = e => {
        e.preventDefault()
        const scheduleObject = { [type]: schedule }
        postSchedule(user.parent.id, scheduleObject)
        setSchedule({
            start_date: '',
            end_date: ''
        })
        //figure out how to create an alert to state New Schedule Created. Bootstrap alerts? react-confirmalerts?
    }

    return (
        <div>
            <h2>Create Schedule</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='start_date'>
                    Start Date:
                    <input name='start_date' type='date' id='start_date' value={schedule.start_date} onChange={handleChange} />
                </label>

                <label htmlFor='end_date'>
                    End Date:
                    <input name='end_date' type='date' id='end_date' value={schedule.end_date} onChange={handleChange} />
                </label>

                <button type='submit'>Create Schedule</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.userData.user,
})

CreateSchedule.propTypes = {
    user: PropTypes.instanceOf(Object).isRequired,
}

export default connect(mapStateToProps)(CreateSchedule)