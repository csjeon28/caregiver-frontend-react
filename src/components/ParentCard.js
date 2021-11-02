import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'
import {
    Button, Card, CardActions, CardContent, CardHeader, Collapse,
    Divider, Grid, IconButton, Typography
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import SmokingRoomsIcon from '@mui/icons-material/SmokingRooms'
import PetsIcon from '@mui/icons-material/Pets'
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone'
import { purple, cyan, amber } from '@mui/material/colors'

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

const ParentCard = ({ parent }) => {
    const [expanded, setExpanded] = useState(false)

    const handleExpandClick = () => {
        setExpanded(!expanded)
    }

    const renderSmoker = () => {
        if (parent.smoker) return <SmokingRoomsIcon sx={{ color: amber[400] }} />
    }
    const renderPets = () => {
        if (parent.has_pets) return <PetsIcon sx={{ color: purple[400] }} />
    }

    return (
        <Grid item xs={12} sm={6} md={4} >
            <Card sx={{ minHeight: 240, height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 5, color: purple[300], bgcolor: cyan[100] }}>
                <CardHeader
                    title={parent.first_name}
                    sx={{ textTransform: 'uppercase' }}
                />
                <Divider />
                <CardContent>
                    <Typography variant='body1' sx={{ color: purple[500] }}>
                        {parent.bio}
                    </Typography>
                </CardContent>

                <CardActions disableSpacing sx={{ marginTop: 'auto' }}>
                    {/* //figure out how to link matching a job with parents */}
                    {/* <Button variant='contained' sx={{ bgcolor: cyan[300] }}> */}
                    {/* <Link href={`/${parent.id}/match-job`}>Interested?</Link> */}
                    {/* </Button> */}
                    &nbsp;&nbsp;
                    <LocationOnTwoToneIcon />
                    <Typography variant='body1' color='text.secondary'>
                        {parent.city}, {parent.state}
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
                            Language(s) Spoken: &nbsp;{parent.language}
                        </Typography>
                        <Typography variant='body2' color='text.secondary'>
                            Number of Children: &nbsp;{parent.number_of_children}
                        </Typography>
                        <Typography variant='body2' color='text.secondary'>
                            Hourly Rate: &nbsp;${parent.hourly_rate} / hour
                        </Typography>
                        {renderSmoker()}
                        {renderPets()}
                    </CardContent>
                </Collapse>
            </Card>
        </Grid>
    )
}

ParentCard.propTypes = {
    parent: PropTypes.instanceOf(Object).isRequired
}

export default ParentCard