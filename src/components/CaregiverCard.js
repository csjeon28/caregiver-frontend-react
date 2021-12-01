import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'
import {
    Card, CardActions, CardContent, CardHeader, Collapse,
    Divider, Grid, IconButton, Typography
} from '@mui/material'
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import SmokingRoomsIcon from '@mui/icons-material/SmokingRooms'
import DriveEtaIcon from '@mui/icons-material/DriveEta'
import MedicalServicesIcon from '@mui/icons-material/MedicalServices'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'
import { purple, cyan, amber, blue, green, red } from '@mui/material/colors'

const ExpandMore = styled((props) => {
    const { expand, ...other } = props
    return <IconButton {...other} />
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}))

const CaregiverCard = ({ caregiver }) => {
    const [expanded, setExpanded] = useState(false)

    const handleExpandClick = () => {
        setExpanded(!expanded)
    }
    const renderSmoker = () => {
        if (caregiver.smoker) return <SmokingRoomsIcon sx={{ color: amber[400] }} />
    }
    const renderDriver = () => {
        if (caregiver.ability_to_drive) return <DriveEtaIcon sx={{ color: blue[400] }} />
    }
    const renderCPR = () => {
        if (caregiver.CPR_cert) return <LocalHospitalIcon sx={{ color: green[600] }} />
    }
    const renderFirstAid = () => {
        if (caregiver.first_aid_cert) return <MedicalServicesIcon sx={{ color: red[700] }} />
    }
    return (
        <Grid item xs={12} sm={6} md={4} >
            <Card sx={{ minHeight: 240, height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 5, bgcolor: purple[50], color: cyan[600] }}>
                <CardHeader
                    title={caregiver.first_name}
                    sx={{ textTransform: 'uppercase' }}
                />
                <Divider />
                <CardContent>
                    <Typography variant='body1' sx={{ color: purple[800], fontSize: 15 }}>
                        {caregiver.bio}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing sx={{ marginTop: 'auto' }}>
                    &nbsp;&nbsp;
                    <LocationOnTwoToneIcon />
                    <Typography variant='body1' color='text.secondary'>
                        {caregiver.city}, {caregiver.state}
                    </Typography>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label='show more'
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout='auto' unmountOnExit>
                    <CardContent>
                        <Typography variant='body2' color='text.secondary'>
                            Language(s) Spoken: &nbsp;{caregiver.language}<br />
                            Hourly Rate: &nbsp;${caregiver.hourly_rate} / hour<br />
                            Email: &nbsp;{caregiver.email}
                        </Typography>
                        {renderSmoker()}
                        {renderDriver()}
                        {renderCPR()}
                        {renderFirstAid()}
                    </CardContent>
                </Collapse>
            </Card>
        </Grid>
    )
}

CaregiverCard.propTypes = {
    caregiver: PropTypes.instanceOf(Object).isRequired
}

export default CaregiverCard