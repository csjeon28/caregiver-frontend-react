import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import Logout from './Logout'
import { AppBar, Box, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import AccountCircle from '@mui/icons-material/AccountCircle'

const SideDashboard = ({ userType }) => {
    const history = useHistory()
    const [anchorEl, setAnchorEl] = useState(null)

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    let personalSideDashboard

    if (userType === 'caregiver') {
        personalSideDashboard = (
            // <div>
            //     <NavLink exact to='/caregiver-dashboard' activeClassName='selected'>
            //         My CareGiver Dashboard
            //     </NavLink>&nbsp;-&nbsp;
            //     <NavLink exact to='/jobs' activeClassName='selected'>
            //         My Jobs
            //     </NavLink>
            //     <Logout />
            // </div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position='static'>
                    <Toolbar>
                        <IconButton
                            size='large'
                            aria-label='account of current user'
                            aria-controls='menu-appbar'
                            aria-haspopup='true'
                            onClick={handleMenu}
                            color='inherit'
                        >
                            <AccountCircle />
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
                            <MenuItem onClick={() => history.push('/profile')}>My Profile</MenuItem>
                            <MenuItem onClick={() => history.push('/jobs')}>My Jobs</MenuItem>
                        </Menu>
                        {/* <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton> */}
                        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                            CareGiver Dashboard
                        </Typography>
                        <Logout />
                    </Toolbar>
                </AppBar>
            </Box>
        )
    }

    if (userType === 'parent') {
        personalSideDashboard = (
            // <div>
            //     <NavLink to='/parent-dashboard' activeClassName='selected'>
            //         My Parent/Guardian Dashboard
            //     </NavLink>&nbsp;-&nbsp;
            //     <NavLink to='/new-job' activeClassName='selected'>
            //         Post a Job
            //     </NavLink>&nbsp;-&nbsp;
            //     <NavLink to='/create-schedule' activeClassName='selected'>
            //         Create Schedule
            //     </NavLink>
            //     <Logout />
            // </div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position='static'>
                    <Toolbar>
                        <IconButton
                            size='large'
                            aria-label='account of current user'
                            aria-controls='menu-appbar'
                            aria-haspopup='true'
                            onClick={handleMenu}
                            color='inherit'
                        >
                            <AccountCircle />
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
                            <MenuItem onClick={() => history.push('/profile')}>My Profile</MenuItem>
                            <MenuItem onClick={() => history.push('/new-job')}>Post Job</MenuItem>
                            <MenuItem onClick={() => history.push('/create-schedule')}>Create Schedule</MenuItem>
                        </Menu>
                        {/* <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton> */}
                        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                            Parent/Guardian Dashboard
                        </Typography>
                        <Logout />
                    </Toolbar>
                </AppBar>
            </Box>
        )
    }

    return (
        <div>
            {personalSideDashboard}
        </div>
    )
}

SideDashboard.propTypes = {
    userType: PropTypes.string,
}

export default SideDashboard