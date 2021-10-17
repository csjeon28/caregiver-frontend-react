import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'
import {
    Card, CardActions, CardContent, CardHeader, Collapse,
    Divider, Grid, IconButton, Typography
} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import SmokeFreeIcon from '@mui/icons-material/SmokeFree'
import DriveEtaIcon from '@mui/icons-material/DriveEta'
import MedicalServicesIcon from '@mui/icons-material/MedicalServices'
import { purple, cyan } from '@mui/material/colors'

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
        if (caregiver.smoker) return <SmokeFreeIcon />
    }

    const renderDriver = () => {
        if (caregiver.ability_to_drive) return <DriveEtaIcon />
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
                    <Typography variant='body1' sx={{ color: purple[800] }}>
                        {caregiver.bio}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing sx={{ marginTop: 'auto' }}>
                    <IconButton aria-label='add to favorites'>
                        <FavoriteIcon />
                    </IconButton>
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
                            Language(s) Spoken: &nbsp;{caregiver.language}
                        </Typography>
                        <Typography variant='body2' color='text.secondary'>
                            Hourly Rate: &nbsp;${caregiver.hourly_rate} / hour
                        </Typography>
                        {renderSmoker()}
                        {renderDriver()}
                    </CardContent>
                </Collapse>
                {/* <h5>Certified: {caregiver.first_aid_cert}{caregiver.CPR_cert}</h5> */}

                {/* <Link to={`/${caregiver.id}/match-job`}>Match</Link>&nbsp;&nbsp; */}
            </Card>
        </Grid>
    )
}

CaregiverCard.propTypes = {
    caregiver: PropTypes.instanceOf(Object).isRequired
}

export default CaregiverCard