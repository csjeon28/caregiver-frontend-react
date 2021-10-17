import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
// import deleteParent from '../fetches/deleteParent'
import { styled } from '@mui/material/styles'
import {
    Card, CardActions, CardContent, CardHeader, Collapse,
    Divider, Grid, IconButton, Typography
} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import SmokingRoomsIcon from '@mui/icons-material/SmokingRooms'
import PetsIcon from '@mui/icons-material/Pets'
import { purple, cyan, amber } from '@mui/material/colors'

// const ParentCard = ({ parent }) => {
// const history = useHistory()
// const handleDelete = () => {
//     deleteParent(parent.id)
//     // const url = `http://localhost:3001/parents/${parent.id}`
//     // axios.delete(url)
//     history.push('/caregiver-dashboard')
// }

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
                {/* <CardMedia
                        component="img"
                        height="194"
                        image=""
                        alt=""
                    /> */}
                <CardContent>
                    <Typography variant='body1' sx={{ color: purple[500] }}>
                        {parent.bio}
                    </Typography>
                </CardContent>

                <CardActions disableSpacing sx={{ marginTop: 'auto' }}>
                    <IconButton aria-label='add to favorites'>
                        <FavoriteIcon />
                    </IconButton>
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
            </Card >
        </Grid>
    )
}
//             <Link to={`/${parent.id}/match-job`}>Match</Link>&nbsp;&nbsp;

ParentCard.propTypes = {
    parent: PropTypes.instanceOf(Object).isRequired
}

export default ParentCard