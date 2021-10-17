import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import CaregiverCard from '../components/CaregiverCard'
import getCaregivers from '../fetches/getCaregivers'
import { Grid } from '@mui/material'

const ParentDashboard = ({ caregivers, error, getCaregivers }) => {
    const usertoken = localStorage.getItem('token')

    useEffect(() => {
        if (usertoken) {
            getCaregivers()
        }
    }, [getCaregivers, usertoken])

    let caregiverCard

    if (caregivers) {
        caregiverCard = caregivers.map((c, index) => <CaregiverCard key={index} caregiver={c} />)
    }
    if (error) {
        caregiverCard = (
            <div>
                Error!<br />
                {error}
            </div>
        )
    }

    return (
        <Grid container spacing={3} sx={{ padding: '2em' }}>
            {caregiverCard}
        </Grid>
    )
}

const mapStateToProps = state => ({
    caregivers: state.caregiverData.caregivers,
    error: state.caregiverData.error
})

const mapDispatchToProps = {
    getCaregivers
}

ParentDashboard.propTypes = {
    caregivers: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Array)]).isRequired,
    error: PropTypes.string.isRequired,
    getCaregivers: PropTypes.func.isRequired
}
// import { getParentMatches } from '../fetches/getJobMatches'
// import JobMatchCard from '../components/JobMatchCard'

// const ParentDashboard = ({ jobs, loading, error, getParentMatches, userData }) => {
//     // debugger
//     useEffect(() => {
//         getParentMatches(userData.user.parent.id)
//     }, [getParentMatches, userData.user.parent.id])

//     let customJob
//     // if (loading) {
//     //     customJob = <div className='loading-container'><div className='loading' /></div>
//     // }
//     if (jobs) {
//         customJob = jobs.map(
//             jobMatch => < JobMatchCard key={jobMatch.id} jobMatch={jobMatch} />
//         )
//     }
//     if (error) {
//         customJob = (
//             <div>
//                 Error!
//                 {error.message}
//             </div>
//         )
//     }
//     return (
//         <div>
//             {/* <h1>Job Matched</h1> */}
//             {customJob}
//         </div>
//     )
// }

// const mapStateToProps = state => ({
//     userData: state.userData,
//     jobs: state.jobData.jobs,
//     loading: state.jobData.loading,
//     error: state.jobData.error,
// })

// const mapDispatchToProps = {
//     getParentMatches,
// }

// ParentDashboard.propTypes = {
//     userData: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Object)]).isRequired,
//     jobs: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Array)]).isRequired,
//     loading: PropTypes.bool.isRequired,
//     error: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Object)]).isRequired,
//     getParentMatches: PropTypes.func.isRequired
// }

export default connect(mapStateToProps, mapDispatchToProps)(ParentDashboard)