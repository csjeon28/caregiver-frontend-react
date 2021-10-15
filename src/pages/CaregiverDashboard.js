import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ParentCard from '../components/ParentCard'
import getParents from '../fetches/getParents'
import { Box, Grid } from '@mui/material'

const CaregiverDashboard = ({ parents, error, getParents }) => {
    const usertoken = localStorage.getItem('token')

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

    return (
        <Grid container spacing={3} sx={{ padding: '2em' }}>
            {parentCard}
        </Grid>
    )
}

const mapStateToProps = state => ({
    parents: state.parentData.parents,
    error: state.parentData.error
})

const mapDispatchToProps = {
    getParents,
}

CaregiverDashboard.propTypes = {
    parents: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Array)]).isRequired,
    error: PropTypes.string.isRequired,
    getParents: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(CaregiverDashboard)