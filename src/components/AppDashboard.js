import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import Logout from './Logout'
import { AppBar, Box, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly'
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
                            <MenuItem sx={{ color: teal[500] }} onClick={() => history.push('/job-matches')}>My Jobs</MenuItem>
                            <MenuItem sx={{ color: teal[800] }} onClick={() => history.push('/all-jobs')}>All Available Jobs</MenuItem>
                        </Menu>
                        <Logout />
                    </Toolbar>
                </AppBar>
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
                            <MenuItem sx={{ color: purple[500] }} onClick={() => history.push('/post-job')}>Post Job</MenuItem>
                            <MenuItem sx={{ color: purple[900] }} onClick={() => history.push('/job-listings')}>Job Listings</MenuItem>
                        </Menu>
                        <Logout />
                    </Toolbar>
                </AppBar>
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