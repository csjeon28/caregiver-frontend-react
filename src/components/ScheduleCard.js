import React from 'react'
import PropTypes from 'prop-types'

const ScheduleCard = ({ schedule }) => {

    <section>
        <div>
            <h3>Schedule Date: {schedule.date}</h3>
        </div>
    </section>

}

ScheduleComponent.propTypes = {
    schedule: PropTypes.instanceOf(Array).isRequired,
}

export default ScheduleCard