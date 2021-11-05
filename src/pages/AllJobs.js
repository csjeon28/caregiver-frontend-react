import { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import getAllJobs from '../fetches/getAllJobs'
import AppDashboard from '../components/AppDashboard'
import JobCard from '../components/JobCard'
import { Chip, Grid, Typography } from '@mui/material'
import { purple } from '@mui/material/colors'
import DriveEtaIcon from '@mui/icons-material/DriveEta'

const AllJobs = ({ getAllJobs, jobData, userData }) => {

    useEffect(() => {
        getAllJobs()
    }, [getAllJobs])

    let jobCard

    if (jobData.jobs) {
        jobCard = jobData.jobs.map((j, index) => <JobCard key={index} job={j} />)
    }

    return (
        <>
            <AppDashboard userData={userData} />
            <Grid container spacing={2} sx={{ padding: '2em', mb: -2 }}>
                <Chip label='Required to Drive' variant='outlined' color='info' icon={<DriveEtaIcon />} />
            </Grid>
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
    jobData: state.jobData
})

const mapDispatchToProps = {
    getAllJobs
}

AllJobs.propTypes = {
    getAllJobs: PropTypes.func.isRequired,
    jobData: PropTypes.instanceOf(Object).isRequired,
    userData: PropTypes.instanceOf(Object).isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(AllJobs)