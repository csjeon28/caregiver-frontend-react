import { useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'
import PropTypes from 'prop-types'
import AppDashboard from '../components/AppDashboard'
import { Button, Grid, Typography } from '@mui/material'
import { purple, cyan } from '@mui/material/colors'
import getJobRequests from '../fetches/getJobRequests'
import RequestedJobCard from '../components/RequestedJobCard'

const RequestedJobs = ({ userData, jobData, getJobRequests }) => {
    const history = useHistory()
    useEffect(() => {
        getJobRequests(userData.user.caregiver.id)
    }, [getJobRequests, userData.user.caregiver.id])

    let requestedJobCard

    if (jobData.requestedJobs) {
        requestedJobCard = jobData.requestedJobs.map((j, index) => <RequestedJobCard userData={userData} key={index} job={j.job} />)
    }

    return (
        <>
            <AppDashboard userData={userData} />
            <Button onClick={() => history.push('/caregiver-dashboard')} sx={{ border: 1, borderRadius: 3, ml: 4, mt: 1, color: cyan[300] }}>Go Back to Dashboard</Button>
            <Typography sx={{ mt: 2, ml: 4, mr: 4, mb: -7, fontSize: 20, fontVariantCaps: 'small-caps', bgcolor: purple[700], color: 'white' }}>
                {userData.user.caregiver.first_name}'s Requested Jobs:
            </Typography>
            <Grid container spacing={3} sx={{ padding: '2em' }}>
                {requestedJobCard}
            </Grid>
        </>
    )
}

const mapStateToProps = state => ({
    userData: state.userData,
    jobData: state.jobData
})

const mapDispatchToProps = {
    getJobRequests
}

RequestedJobs.propTypes = {
    userData: PropTypes.instanceOf(Object),
    jobData: PropTypes.instanceOf(Object),
    getJobRequests: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestedJobs)