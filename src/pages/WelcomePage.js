import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly'
import Image from '../images/caregiver_background.jpeg'
import { blue, pink, green } from '@mui/material/colors'

const WelcomePage = () => {
    const history = useHistory()

    return (
        < Grid container component='main' sx={{
            height: '100vh',
            backgroundImage: `url(${Image})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: 'white',
            backgroundSize: 'contain',
            backgroundPosition: 'center'
        }}>
            <Card sx={{ margin: 'auto', borderRadius: '10px', bgcolor: 'transparent', backdropFilter: 'blur(18px)' }} >
                <Grid container justifyContent='center' sx={{ bgcolor: 'transparent' }}>
                    <Grid item elevation={6} sx={{ ml: 1 }}>
                        <CardContent variant='outlined' elevation={3} sx={{ maxWidth: 500, bgcolor: 'transparent', color: pink[300] }}>
                            <Typography align='center' variant='h4' fontFamily='Cabin Sketch' >
                                &middot;Welcome&middot; <br />to<br />
                            </Typography>
                            <Typography align='center' variant='h3' fontFamily='Cabin Sketch' >
                                <ChildFriendlyIcon sx={{ fontSize: 30, color: green[100] }} />
                                &nbsp;CareGiver&nbsp;
                                <ChildFriendlyIcon sx={{ fontSize: 30, color: green[100] }} />
                            </Typography>
                            <CardActions style={{ justifyContent: 'center' }}>
                                <Button onClick={() => history.push('/login')} variant='outlined' sx={{
                                    fontFamily: 'Cabin Sketch', border: '0.1em solid', borderColor: blue[300], borderRadius: '10px', color: 'white'
                                }}>Enter</Button>
                            </CardActions>
                        </CardContent>
                    </Grid>
                </Grid>
            </Card >
        </Grid >
    )
}

export default WelcomePage