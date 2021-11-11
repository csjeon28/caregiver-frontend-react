import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'
import {
    Box, Button, Card, CardActions, CardContent, CardHeader, Collapse,
    Divider, Grid, IconButton, Modal, Typography
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import DriveEtaIcon from '@mui/icons-material/DriveEta'
import { pink, purple, cyan, blue } from '@mui/material/colors'
import postJobRequests from '../fetches/postJobRequests'

const ExpandMore = styled((props) => {
    const { expand, ...other } = props
    return <IconButton {...other} />
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(360deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}))

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: pink[50],
    boxShadow: 24,
    pt: 3,
    px: 3,
    pb: 3,
}

const JobCard = ({ job, userName, parentData, userData, postJobRequests }) => {
    const history = useHistory()
    const [expanded, setExpanded] = useState(false)
    const [open, setOpen] = useState(false)

    const handleExpandClick = () => {
        setExpanded(!expanded)
    }

    const renderDriver = () => {
        if (job.required_to_drive) return <DriveEtaIcon sx={{ color: blue[400] }} />
    }

    const parentName = parentData.parents.map(n => {
        if (n.id === job.parent_id) return n.first_name
        return null
    })

    const renderParentName = () => {
        if (userData.userType === 'caregiver') return parentName
        if (userData.userType === 'parent') return userName
    }

    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    const handleJobButton = () => {
        const candidateObject = {
            candidate: { job_id: job.id }
        }
        postJobRequests(candidateObject, userData.user.caregiver.id)
        history.push('/requested-jobs')
    }

    const renderRequest = () => {
        if (userData.userType === 'caregiver') return (
            <>
                <Button onClick={handleOpen} variant='outlined' size='small' sx={{ bgcolor: pink[50], color: purple[800] }}>
                    Interested?
                </Button>
                <Modal open={open} onClose={handleClose}>
                    <Box sx={{ ...style, width: 400, borderRadius: 4 }}>
                        <Typography sx={{ mb: 2, color: purple[800], textTransform: 'uppercase' }}>Request job from {parentName}</Typography>
                        <Button onClick={handleJobButton} variant='outlined' size='small' sx={{ color: pink[100], bgcolor: purple[800] }}>Request Job</Button>
                        <Button onClick={handleClose} sx={{ color: purple[400] }}>Cancel</Button>
                    </Box>
                </Modal>
            </>
        )
    }

    return (
        <Grid item xs={12} sm={6} md={4} >
            <Card sx={{ minHeight: 240, height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 5, bgcolor: purple[50], color: cyan[600] }}>
                <CardHeader
                    title={job.title}
                    sx={{ textTransform: 'uppercase' }}
                />
                <Divider />
                <Typography component='span' variant='body1' align='left' sx={{ boxShadow: 2, padding: 0.7, color: cyan[800], mr: 2, ml: 2, fontSize: 13 }}>
                    Posted by:
                    <Typography variant='body2' sx={{ color: pink[200], textTransform: 'uppercase', fontSize: 13, letterSpacing: 1 }}>
                        {renderParentName()}
                    </Typography>
                </Typography>
                <CardContent>
                    <Typography variant='body1' sx={{ color: purple[800] }}>
                        {job.job_description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing sx={{ marginTop: 'auto', ml: 1 }}>
                    {renderRequest()}
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label='show more'
                    >
                        {renderDriver()}
                        <Typography sx={{ textTransform: 'uppercase', fontSize: 12 }}>View details</Typography>
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout='auto' unmountOnExit>
                    <CardContent>
                        <Typography variant='body2' color='text.secondary'>
                            Pay Rate: &nbsp;${job.hourly_rate} / hour<br />
                            Number of Children: {job.number_of_children}<br />
                            Days Needed: {job.specific_days_needed}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </Grid>
    )
}

const mapStateToProps = state => ({
    userData: state.userData
})

const mapDispatchToProps = {
    postJobRequests
}

JobCard.propTypes = {
    job: PropTypes.instanceOf(Object).isRequired,
    parentData: PropTypes.instanceOf(Object).isRequired,
    postJobRequests: PropTypes.func,
    userData: PropTypes.instanceOf(Object),
    userName: PropTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(JobCard)