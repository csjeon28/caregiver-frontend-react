import React, { useState } from 'react'
import { Redirect } from 'react-router'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { userLogout } from '../actions/userActions'
import LogoutIcon from '@mui/icons-material/Logout'
import { Button, Stack } from '@mui/material'
import { styled } from '@mui/material/styles'
import { purple } from '@mui/material/colors'

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
        backgroundColor: purple[800],
    },
}))

const Logout = ({ userLogout }) => {
    const history = useHistory()
    const [loggedIn, setLoggedIn] = useState(false)

    const handleLogout = e => {
        e.preventDefault()
        setLoggedIn(true)
        userLogout()
        history.push('/')
    }

    if (loggedIn) {
        return <Redirect to='/login' />
    }

    return (
        <Stack direction='row' spacing={2}>
            <ColorButton onClick={handleLogout} variant='contained' startIcon={<LogoutIcon />}>
                Log Out
            </ColorButton>
        </Stack>
    )
}

const mapDispatchToProps = {
    userLogout
}

Logout.propTypes = {
    userLogout: PropTypes.func.isRequired,
}

export default connect(null, mapDispatchToProps)(Logout)