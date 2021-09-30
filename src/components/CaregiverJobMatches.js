import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getCaregiverMatches } from '../fetches/getJobMatches'
import JobMatchCard from './JobMatchCard'

const CaregiverJobMatches = ({ jobData, getCaregiverMatches, userData }) => {
    useEffect(() => {
        getCaregiverMatches(userData.user.caregiver.id)
    }, [getCaregiverMatches, userData.user.caregiver.id])

    let customJobMatch
    if (jobData.loading) {
        customJobMatch = <div className='loading-container'><div className='loading' /></div>
    }
    if (jobData.jobs) {
        customJobMatch = (
            <div>
                {jobData.jobs.map(
                    jobMatch => <JobMatchCard key={jobMatch.id} jobMatch={jobMatch} />,
                )}
            </div>
        )
    }
    if (jobData.error) {
        customJobMatch = (
            <div>
                Error
                {jobData.error.message}
            </div>
        )
    }
    return (
        <section>
            <h1>My Job Matches</h1>
            {customJobMatch}
        </section>
    )
}

const mapStateToProps = state => ({
    userData: state.userData,
    jobData: state.jobData,
})

const mapDispatchToProps = {
    getCaregiverMatches,
}

CaregiverJobMatches.propTypes = {
    userData: PropTypes.instanceOf(Object).isRequired,
    jobData: PropTypes.instanceOf(Object).isRequired,
    getCaregiverMatches: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(CaregiverJobMatches)