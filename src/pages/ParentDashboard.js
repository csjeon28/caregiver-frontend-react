import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getParentMatches } from '../fetches/getJobMatches'
import JobMatchCard from '../components/JobMatchCard'

const ParentDashboard = ({ jobs, loading, error, getParentMatches, userData }) => {
    useEffect(() => {
        getParentMatches(userData.user.parent.id)
    }, [getParentMatches, userData.user.parent.id])

    let customJob
    if (loading) {
        customJob = <div className='loading-container'><div className='loading' /></div>
    }
    if (jobs) {
        customJob = jobs.map(
            jobMatch => <JobMatchCard key={jobMatch.id} jobMatch={jobMatch} />
        )
    }
    if (error) {
        customJob = (
            <div>
                Error!
                {error.message}
            </div>
        )
    }
    return (
        <div>
            <h1>Job Matched</h1>
            {customJob}
        </div>
    )
}

const mapStateToProps = state => ({
    userData: state.userData,
    jobs: state.jobData.jobs,
    loading: state.jobData.loading,
    error: state.jobData.error,
})

const mapDispatchToProps = {
    getParentMatches,
}

ParentDashboard.propTypes = {
    userData: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Object)]).isRequired,
    jobs: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Array)]).isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Object)]).isRequired,
    getParentMatches: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(ParentDashboard)