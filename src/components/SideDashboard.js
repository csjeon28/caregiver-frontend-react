import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import Logout from './Logout'
import { AppBar, Box, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly'
import { purple, cyan, amber, deepOrange } from '@mui/material/colors'

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
                            <MenuItem onClick={() => history.push('/caregiver-dashboard')}>My Dashboard</MenuItem>
                            <MenuItem onClick={() => history.push('/profile')}>My Profile</MenuItem>
                            <MenuItem onClick={() => history.push('/jobs')}>My Jobs</MenuItem>
                        </Menu>
                        <Logout />
                    </Toolbar>
                </AppBar>
            </Box>
        )
    }

    if (userType === 'parent') {
        personalSideDashboard = (
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
                            <MenuItem onClick={() => history.push('/parent-dashboard')}>My Dashboard</MenuItem>
                            <MenuItem onClick={() => history.push('/profile')}>My Profile</MenuItem>
                            <MenuItem onClick={() => history.push('/new-job')}>Post Job</MenuItem>
                            <MenuItem onClick={() => history.push('/create-schedule')}>Create Schedule</MenuItem>
                        </Menu>
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