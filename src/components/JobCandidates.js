import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'
import PropTypes from 'prop-types'
import patchJob from '../fetches/patchJob'
import {
    Box, Button, Card, CardActions, CardContent, CardHeader, Divider, Grid, Modal, Typography
} from '@mui/material'
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone'
import { purple, deepPurple, cyan } from '@mui/material/colors'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: purple[100],
    boxShadow: 24,
    pt: 3,
    px: 3,
    pb: 3,
}

const JobCandidates = ({ candidates, applicant, caregivers, userData, jobId, patchJob }) => {
    const history = useHistory()
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleAccept = () => {
        const selectedCand = {
            job_id: jobId,
            caregiver_id: applicant.caregiver_id
        }
        patchJob(selectedCand, userData.user.parent.id)
        history.push('/parent-dashboard')
    }

    return (
        <>
            <Button onClick={handleOpen} sx={{ mb: 2, color: purple[800], textTransform: 'none' }}>
                {candidates.first_name}&nbsp;{candidates.last_name}
            </Button><br />
            <Modal open={open} onClose={handleClose}>
                <Box sx={{ ...style, width: 400, borderRadius: 4 }}>
                    <Grid item xs={12} >
                        <Card sx={{ minHeight: 240, height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 5, bgcolor: deepPurple[50] }}>
                            {caregivers.map((c, index) => {
                                if (applicant.caregiver_id === c.id) return (
                                    <div key={index}>
                                        <CardHeader
                                            title={c.first_name}
                                            sx={{ textTransform: 'uppercase', color: cyan[600] }}
                                        />
                                        <Typography variant='body1' color='text.secondary' align='right' sx={{ mt: -3, mr: 1 }}>
                                            <LocationOnTwoToneIcon sx={{ fontSize: 24 }} /> {c.city}, {c.state}
                                        </Typography>
                                        <Divider />
                                        <CardContent>
                                            <Typography variant='body1' sx={{ color: purple[800] }}>
                                                {c.bio}
                                            </Typography>
                                        </CardContent>
                                        <CardActions disableSpacing sx={{ marginTop: 'auto' }}>
                                            &nbsp;&nbsp;
                                            <Typography variant='body2' color='text.secondary'>
                                                Language(s) Spoken: &nbsp;{c.language}<br />
                                                Hourly Rate: &nbsp;${c.hourly_rate} / hour
                                            </Typography>
                                        </CardActions>
                                    </div>
                                )
                                return null
                            })}
                            <Button onClick={handleAccept}>Accept</Button>
                            <Button onClick={handleClose} sx={{ color: purple[400] }}>Go back</Button>
                        </Card>
                    </Grid>
                </Box>
            </Modal>
        </>
    )
}

const mapStateToProps = state => ({
    caregivers: state.caregiverData.caregivers,
    userData: state.userData
})

const mapDispatchToProps = {
    patchJob
}

JobCandidates.propTypes = {
    caregivers: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Array)]),
    patchJob: PropTypes.func.isRequired,
    userData: PropTypes.instanceOf(Object)
}


export default connect(mapStateToProps, mapDispatchToProps)(JobCandidates)