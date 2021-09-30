import React, { useState } from 'react'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import userLogin from '../fetches/userLogin'

const Login = ({ userLogin, userData }) => {
    const [user, setUser] = useState({
        email: '',
        password: '',
    })
    const [userType, setUserType] = useState('caregiver')

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

    const handleUserType = (e) => {
        setUserType(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const userObject = { [userType]: user }
        userLogin(userObject, userType)
        setUser({
            email: '',
            password: '',
        })
    }

    let personalizedLogin = (
        <div>
            <h1>Login Form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='email'>
                    <input name='email' type='email' id='email' placeholder='Email' onChange={handleChange} />
                </label>

                <label htmlFor='password'>
                    <input name='password' id='password' type='password' placeholder='Password' onChange={handleChange} />
                </label>

                <select value={userType} onChange={handleUserType}>
                    <option value='caregiver'>Caregiver</option>
                    <option value='parent'>Parent/Guardian</option>
                </select>

                <button type='submit'>Log In</button>
            </form>
            {userData.error ? (<div><p>{userData.user.error}</p></div>) : null}
            <span>
                Don't have an account? Sign up as:<br />
                {' '}
                <Link to='/caregiver/signup'>Caregiver</Link>
                {' or '}
                <Link to='/parent/signup'>Parent/Guardian</Link>
            </span>
        </div>
    )

    if (userData.loading) {
        personalizedLogin = <div className='loading-container'><div className='loading' /></div>
    }
    if (userData.isLoggedIn) {
        if (userData.userType === 'caregiver') { personalizedLogin = <Redirect to='/caregiver-dashboard' /> }
        if (userData.userType === 'parent') { personalizedLogin = <Redirect to='/parent-dashboard' /> }
    }
    return (
        <section>
            <div>
                {personalizedLogin}
            </div>
        </section>
    )
}

const mapStateToProps = state => ({
    userData: state.userData,
})

const mapDispatchToProps = {
    userLogin,
}

Login.propTypes = {
    userData: PropTypes.instanceOf(Object).isRequired,
    userLogin: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)