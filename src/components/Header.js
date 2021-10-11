import React from 'react'
import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly'
import Image from '../images/caregiver_background.jpeg'
import { grey, blue, deepOrange } from '@mui/material/colors'

const Header = () => (
    <Grid container component='main' sx={{
        height: '100vh',
        backgroundImage: `url(${Image})`,
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'white',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
    }}>
        {/* // CENTER THE ENTER BUTTON AND STYLE IT */}
        <Box sx={{ margin: 'auto' }} >
            <Grid container justifyContent='center'>
                <Grid item elevation={6} sx={{ ml: 3 }}>
                    <Paper variant='outlined' elevation={3} sx={{ backdropFilter: 'blur(2px)', maxWidth: 500, bgcolor: grey[100], color: blue[500] }}>
                        <Typography align='center' variant='h4'>
                            Welcome to<br />
                            <ChildFriendlyIcon sx={{ color: deepOrange[200] }} />
                            CareGiver
                            <ChildFriendlyIcon sx={{ color: deepOrange[200] }} />
                        </Typography>
                        <Button>Enter</Button>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    </Grid >
)

export default Header