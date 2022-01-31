import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import deleteParent from '../fetches/deleteParent'
import { styled } from '@mui/material/styles'
import {
    Button, Card, CardActions, CardContent, CardHeader, Collapse,
    Divider, Grid, IconButton, Typography
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import SmokingRoomsIcon from '@mui/icons-material/SmokingRooms'
import PetsIcon from '@mui/icons-material/Pets'
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone'
import { deepPurple, purple, cyan, amber } from '@mui/material/colors'

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
    const history = useHistory()

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

    const deleteBtn = () => {
        deleteParent(parent.id)
        history.push('/caregiver-dashboard')
    }

    return (
        <Grid item xs={12} sm={6} md={4} >
            <Card sx={{ minHeight: 240, height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 5, color: purple[400], bgcolor: cyan[50] }}>
                <CardHeader
                    title={parent.first_name}
                    sx={{ textTransform: 'uppercase' }}
                />
                <Button onClick={deleteBtn}>X</Button>
                <Divider />
                <CardContent>
                    <Typography variant='body1' sx={{ color: purple[200], fontSize: 14 }}>
                        {parent.bio}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing sx={{ marginTop: 'auto' }}>
                    &nbsp;&nbsp;
                    <LocationOnTwoToneIcon sx={{ color: deepPurple[200] }} />
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
                            Language(s) Spoken: &nbsp;{parent.language}<br />
                            Number of Children: &nbsp;{parent.number_of_children}<br />
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