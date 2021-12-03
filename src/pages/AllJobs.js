import { useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'
import PropTypes from 'prop-types'
import getAllJobs from '../fetches/getAllJobs'
import AppDashboard from '../components/AppDashboard'
import JobCard from '../components/JobCard'
import { Button, Chip, Grid, Typography } from '@mui/material'
import { cyan, purple } from '@mui/material/colors'
import DriveEtaIcon from '@mui/icons-material/DriveEta'

const AllJobs = ({ getAllJobs, jobData, userData, parentData }) => {
    const history = useHistory()
    useEffect(() => {
        getAllJobs()
    }, [getAllJobs])

    let jobCard

    if (jobData.jobs) {
        jobCard = jobData.jobs.map((j, index) => <JobCard userData={userData} key={index} job={j} parentData={parentData} />)
    }

    return (
        <>
            <AppDashboard userData={userData} />
            <Grid container spacing={2} sx={{ padding: '2em', mb: -2 }}>
                <Chip label='Required to Drive' variant='outlined' color='info' icon={<DriveEtaIcon />} />
            </Grid>
            <Button onClick={() => history.push('/caregiver-dashboard')} sx={{ border: 1, borderRadius: 3, ml: 4, mt: 1, color: cyan[300] }}>Go Back to Dashboard</Button>
            <Typography sx={{ mt: 2, ml: 4, mr: 4, mb: -7, fontSize: 20, fontVariantCaps: 'small-caps', bgcolor: purple[700], color: 'white' }}>
                All Available Jobs:
            </Typography>
            <Grid container spacing={3} sx={{ padding: '2em' }}>
                {jobCard}
            </Grid>
        </>
    )
}

const mapStateToProps = state => ({
    userData: state.userData,
    jobData: state.jobData,
    parentData: state.parentData
})

const mapDispatchToProps = {
    getAllJobs
}

AllJobs.propTypes = {
    getAllJobs: PropTypes.func.isRequired,
    jobData: PropTypes.instanceOf(Object).isRequired,
    userData: PropTypes.instanceOf(Object).isRequired,
    parentData: PropTypes.instanceOf(Object).isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(AllJobs)