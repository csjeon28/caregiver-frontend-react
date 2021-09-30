import React from 'react'
import PropTypes from 'prop-types'

const JobMatchCard = ({ jobMatch }) => {
    const jobDate = jobMatch.time.split(' ')[0]
    const jobTime = jobMatch.time.split(' ')[1]

    return (
        <section>
            <p>Job Status: Confirmed</p>
            <p>
                Date:
                {jobDate}
            </p>
            <p>
                Time:
                {jobTime}
            </p>
        </section>
    )
}

JobMatchCard.propTypes = {
    jobMatch: PropTypes.instanceOf(Object).isRequired,
}

export default JobMatchCard