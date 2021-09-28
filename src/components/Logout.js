import React, { useState } from 'react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { userLogout } from '../actions/userActions'

const Logout = ({ userLogout }) => {
    const [loggedIn, setLoggedIn] = useState(false)

    const handleLogout = e => {
        e.preventDefault()
        setLoggedIn(true)
        userLogout()
    }

    if (loggedIn) {
        return <Redirect to='/login' />
    }

    return (
        <button type='button' onClick={handleLogout}>Log Out</button>
    )
}

const mapDispatchToProps = {
    userLogout,
}

Logout.propTypes = {
    userLogout: PropTypes.func.isRequired,
}

export default connect(null, mapDispatchToProps)(Logout)