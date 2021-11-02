import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'
import {
    Card, CardActions, CardContent, CardHeader, Collapse,
    Divider, Grid, IconButton, Typography
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import DriveEtaIcon from '@mui/icons-material/DriveEta'
import { purple, cyan, blue } from '@mui/material/colors'
import getJobListings from '../fetches/getJobListings'

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

const JobCard = ({ job }) => {
    const [expanded, setExpanded] = useState(false)

    const handleExpandClick = () => {
        setExpanded(!expanded)
    }

    const renderDriver = () => {
        if (job.required_to_drive) return <DriveEtaIcon sx={{ color: blue[400] }} />
    }

    return (
        <Grid item xs={12} sm={6} md={4} >
            <Card sx={{ minHeight: 240, height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 5, bgcolor: purple[50], color: cyan[600] }}>
                <CardHeader
                    title={job.title}
                    sx={{ textTransform: 'uppercase' }}
                />
                <Divider />
                <CardContent>
                    <Typography variant='body1' sx={{ color: purple[800] }}>
                        {job.job_description}
                    </Typography>
                    <Typography variant='body2' sx={{ color: purple[800] }}>
                        Days Needed: {job.specific_days_needed}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing sx={{ marginTop: 'auto' }}>
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
                            Hourly Rate: &nbsp;${job.hourly_rate} / hour
                        </Typography>
                        <Typography variant='body2' color='text.secondary'>
                            Number of Children: {job.number_of_children}
                        </Typography>
                        {renderDriver()}
                    </CardContent>
                </Collapse>
            </Card>
        </Grid>
    )
}

JobCard.propTypes = {
    job: PropTypes.instanceOf(Object).isRequired
}

export default JobCard