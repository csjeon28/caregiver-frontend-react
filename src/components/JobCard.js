import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'
import {
    Card, CardActions, CardContent, CardHeader, Collapse,
    Divider, Grid, IconButton, Typography
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import DriveEtaIcon from '@mui/icons-material/DriveEta'
import { pink, purple, cyan, blue } from '@mui/material/colors'

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

const JobCard = ({ job, userName, parentData, userData }) => {
    const [expanded, setExpanded] = useState(false)

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

    return (
        <Grid item xs={12} sm={6} md={4} >
            <Card sx={{ minHeight: 240, height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 5, bgcolor: purple[50], color: cyan[600] }}>
                <CardHeader
                    title={job.title}
                    sx={{ textTransform: 'uppercase' }}
                />
                <Divider />
                <Typography variant='body1' align='left' sx={{ boxShadow: 2, padding: 0.7, color: cyan[800], mr: 2, ml: 2, fontSize: 13 }}>
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
                    {renderDriver()}
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label='show more'
                    >
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

JobCard.propTypes = {
    job: PropTypes.instanceOf(Object).isRequired,
    parentData: PropTypes.instanceOf(Object).isRequired,
    userData: PropTypes.instanceOf(Object),
    userName: PropTypes.string
}

export default JobCard