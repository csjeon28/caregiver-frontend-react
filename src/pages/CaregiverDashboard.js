import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'
import PropTypes from 'prop-types'
import ParentCard from '../components/ParentCard'
import getParents from '../fetches/getParents'
import { Button, Chip, Grid, Typography } from '@mui/material'
import { purple, cyan } from '@mui/material/colors'
import AppDashboard from '../components/AppDashboard'
import PetsIcon from '@mui/icons-material/Pets'
import SmokingRoomsIcon from '@mui/icons-material/SmokingRooms'

const CaregiverDashboard = ({ parents, error, getParents, userData }) => {
    const usertoken = localStorage.getItem('token')
    const history = useHistory()
    useEffect(() => {
        if (usertoken) {
            getParents()
        }
    }, [getParents, usertoken])

    let parentCard

    if (parents) {
        parentCard = parents.map((p, index) => <ParentCard key={index} parent={p} />)
    }
    if (error) {
        parentCard = (
            <div>
                Error!<br />
                {error}
            </div>
        )
    }

    const welcomeName = userData.user ? userData.user.caregiver.first_name : null

    return (
        <>
            <AppDashboard userData={userData} />
            <Grid container spacing={3} sx={{ padding: '2em', mb: -2 }}>
                <Chip label='Smoker' variant='outlined' color='warning' icon={<SmokingRoomsIcon />} />
                <Chip label='Has Pets' variant='outlined' color='secondary' icon={<PetsIcon />} />
            </Grid>
            <Typography variant='h4' component='div'
                sx={{ ml: 4, color: purple[700], flexGrow: 1, fontFamily: 'Cabin Sketch', fontSize: 28, fontStyle: 'italic', letterSpacing: 3 }}>
                Welcome back {welcomeName}&nbsp;!
            </Typography>
            <Button onClick={() => history.push('/all-jobs')} sx={{ border: 1, borderRadius: 3, ml: 4, mt: 1, color: cyan[300] }}>View Available Jobs</Button>
            <Typography sx={{ mt: 2, ml: 4, mr: 4, mb: -7, fontSize: 20, fontVariantCaps: 'small-caps', bgcolor: purple[700], color: 'white' }}>
                Meet the Parents/Guardians:
            </Typography>
            <Grid container spacing={3} sx={{ padding: '2em' }}>
                {parentCard}
            </Grid>
        </>
    )
}

const mapStateToProps = state => ({
    parents: state.parentData.parents,
    error: state.parentData.error,
    userData: state.userData
})

const mapDispatchToProps = {
    getParents,
}

CaregiverDashboard.propTypes = {
    parents: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Array)]).isRequired,
    error: PropTypes.string.isRequired,
    getParents: PropTypes.func.isRequired,
    userData: PropTypes.instanceOf(Object).isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(CaregiverDashboard)