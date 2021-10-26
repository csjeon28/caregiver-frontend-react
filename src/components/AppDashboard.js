import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import Logout from './Logout'
import { AppBar, Box, Chip, Grid, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly'
import SmokingRoomsIcon from '@mui/icons-material/SmokingRooms'
import DriveEtaIcon from '@mui/icons-material/DriveEta'
import PetsIcon from '@mui/icons-material/Pets'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'
import MedicalServicesIcon from '@mui/icons-material/MedicalServices'
import { purple, cyan, amber, deepOrange, teal } from '@mui/material/colors'

const AppDashboard = ({ userData }) => {
    const history = useHistory()
    const [anchorEl, setAnchorEl] = useState(null)

    const handleMenu = (e) => {
        setAnchorEl(e.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    let personalAppDashboard
    if (userData.userType === 'caregiver') {
        personalAppDashboard = (
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position='static' sx={{ bgcolor: purple[200], color: cyan[50] }}>
                    <Toolbar>
                        <Typography variant='h1' component='div' sx={{ flexGrow: 1, fontFamily: 'Cabin Sketch', fontSize: 38 }}>
                            <ChildFriendlyIcon sx={{ fontSize: 24, color: amber[100] }} />
                            &nbsp;&middot;&nbsp;&middot;&nbsp;CareGiver Dashboard&nbsp;&middot;&nbsp;&middot;&nbsp;
                            <ChildFriendlyIcon sx={{ fontSize: 24, color: amber[100] }} />
                        </Typography>
                        <IconButton
                            size='large'
                            aria-label='account of current user'
                            aria-controls='menu-appbar'
                            aria-haspopup='true'
                            onClick={handleMenu}
                            color='inherit'
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id='menu-appbar'
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem sx={{ color: teal[200] }} onClick={() => history.push('/caregiver-dashboard')}>Dashboard</MenuItem>
                            <MenuItem sx={{ color: teal[600] }} onClick={() => history.push('/job-matches')}>My Jobs</MenuItem>
                        </Menu>
                        <Logout />
                    </Toolbar>
                </AppBar>
                <Grid container spacing={3} sx={{ padding: '2em' }}>
                    <Chip label='Smoker' variant='outlined' color='warning' icon={<SmokingRoomsIcon />} />
                    <Chip label='Has Pets' variant='outlined' color='secondary' icon={<PetsIcon />} />
                </Grid>
            </Box>
        )
    }

    if (userData.userType === 'parent') {
        personalAppDashboard = (
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position='static' sx={{ color: purple[300], bgcolor: cyan[100] }}>
                    <Toolbar>
                        <Typography variant='h1' component='div' sx={{ flexGrow: 1, fontFamily: 'Cabin Sketch', fontSize: 38 }}>
                            <ChildFriendlyIcon sx={{ fontSize: 24, color: deepOrange[200] }} />
                            &nbsp;&middot;&nbsp;&middot;&nbsp;Parent&nbsp;||&nbsp;Guardian Dashboard&nbsp;&middot;&nbsp;&middot;&nbsp;
                            <ChildFriendlyIcon sx={{ fontSize: 24, color: deepOrange[200] }} />
                        </Typography>
                        <IconButton
                            size='large'
                            aria-label='account of current user'
                            aria-controls='menu-appbar'
                            aria-haspopup='true'
                            onClick={handleMenu}
                            color='inherit'
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id='menu-appbar'
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem sx={{ color: purple[200] }} onClick={() => history.push('/parent-dashboard')}>Dashboard</MenuItem>
                            <MenuItem sx={{ color: purple[600] }} onClick={() => history.push('/post-job')}>Post Job</MenuItem>
                        </Menu>
                        <Logout />
                    </Toolbar>
                </AppBar>
                <Grid container spacing={2} sx={{ padding: '2em' }}>
                    <Chip label='Smoker' variant='outlined' color='warning' icon={<SmokingRoomsIcon />} />
                    <Chip label='Able to Drive' variant='outlined' color='info' icon={<DriveEtaIcon />} />
                    <Chip label='CPR Certified' variant='outlined' color='success' icon={<LocalHospitalIcon />} />
                    <Chip label='First Aid Certified' variant='outlined' color='error' icon={<MedicalServicesIcon />} />
                </Grid>
            </Box>
        )
    }

    return (
        <>
            {personalAppDashboard}
        </>
    )
}

AppDashboard.propTypes = {
    userData: PropTypes.instanceOf(Object).isRequired
}

export default AppDashboard