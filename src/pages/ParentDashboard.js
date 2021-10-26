import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import AppDashboard from '../components/AppDashboard'
import CaregiverCard from '../components/CaregiverCard'
import getCaregivers from '../fetches/getCaregivers'
import { Grid, Typography } from '@mui/material'
import { cyan } from '@mui/material/colors'

const ParentDashboard = ({ caregivers, error, getCaregivers, userData }) => {
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

    const welcomeName = userData.user ? userData.user.parent.first_name : null

    return (
        <>
            <AppDashboard userData={userData} />
            <Typography variant='h4' component='div'
                sx={{ ml: 4, color: cyan[800], flexGrow: 1, fontFamily: 'Cabin Sketch', fontSize: 28, fontStyle: 'italic', letterSpacing: 3 }}>
                Welcome back {welcomeName}&nbsp;!
            </Typography>
            <Typography sx={{ mt: 2, ml: 4, mr: 4, mb: -7, fontSize: 20, fontVariantCaps: 'small-caps', bgcolor: cyan[700], color: 'white' }}>
                Browse Caregivers:
            </Typography>
            <Grid container spacing={3} sx={{ padding: '2em' }}>
                {caregiverCard}
            </Grid>
        </>
    )
}

const mapStateToProps = state => ({
    caregivers: state.caregiverData.caregivers,
    error: state.caregiverData.error,
    userData: state.userData,
})

const mapDispatchToProps = {
    getCaregivers
}

ParentDashboard.propTypes = {
    caregivers: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Array)]).isRequired,
    error: PropTypes.string.isRequired,
    getCaregivers: PropTypes.func.isRequired,
    userData: PropTypes.instanceOf(Object).isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(ParentDashboard)