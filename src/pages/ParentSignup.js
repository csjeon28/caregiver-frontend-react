import React, { useState } from 'react'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import userSignup from '../fetches/userSignup'

const ParentSignup = ({ userSignup, userData }) => {
    const [user, setUser] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        bio: '',
        city: '',
        state: '',
        country: '',
        language: '',
        smoker: '',
        has_pets: '',
        hourly_rate: '',
        profile_image: '',
        number_of_children: ''
    })

    const userType = 'parent'

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const userObject = { [userType]: user }
        userSignup(userObject, userType)
        setUser({
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            bio: '',
            city: '',
            state: '',
            country: '',
            language: '',
            smoker: '',
            has_pets: '',
            hourly_rate: '',
            profile_image: '',
            number_of_children: ''
        })
    }

    let personalizedSignup
    if (userData.token) {
        personalizedSignup = <Redirect to='/parent-dashboard' />
    } else {
        personalizedSignup = (
            <div>
                <h1>Parent Sign Up Page</h1>
                <form onSubmit={handleSubmit} id='parent_signup'>
                    <label htmlFor='first_name'>
                        <input name='first_name' type='text' id='first_name' placeholder='First Name' onChange={handleChange} />
                    </label>
                    <label htmlFor='last_name'>
                        <input name='last_name' type='text' id='last_name' placeholder='Last Name' onChange={handleChange} />
                    </label>
                    <label htmlFor='email'>
                        <input name='email' type='email' id='email' placeholder='Email' onChange={handleChange} />
                    </label>
                    <label htmlFor='password'>
                        <input name='password' id='password' type='password' placeholder='Password' onChange={handleChange} />
                    </label>
                    <label htmlFor='bio'>
                        <input name='bio' id='bio' type='textarea' placeholder='About me' onChange={handleChange} />
                    </label>
                    <label htmlFor='city'>
                        <input name='city' id='city' type='text' placeholder='City' onChange={handleChange} />
                    </label>
                    <label htmlFor='state'>
                        <input name='state' id='state' type='text' placeholder='State' onChange={handleChange} />
                    </label>
                    <label htmlFor='country'>
                        <input name='country' id='country' type='text' placeholder='Country' onChange={handleChange} />
                    </label>
                    <label htmlFor='language'>
                        <input name='language' id='language' type='text' placeholder='Language(s) Spoken' onChange={handleChange} />
                    </label>
                    <br />
                    <label htmlFor='smoker'>Smoker
                        <input name='smoker' id='smoker' type='checkbox' onChange={handleChange} />
                    </label>

                    <label htmlFor='has_pets'>I have pets
                        <input name='has_pets' id='has_pets' type='checkbox' onChange={handleChange} />
                    </label>
                    <br />
                    <label htmlFor='hourly_rate'>
                        <input name='hourly_rate' id='hourly_rate' type='number' placeholder='Hourly Rate' onChange={handleChange} />
                    </label>
                    <br />
                    <label htmlFor='number_of_children'>No. of Children
                        <select form='parent_signup' name='number_of_children' id='number_of_children' placeholder='Number of Children' onChange={handleChange}>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4+'>4+</option>
                        </select>
                    </label>
                    <br />
                    <label htmlFor='profile_image'>Profile Image
                        <input name='profile_image' type='file' id='profile_image' onChange={handleChange} />
                    </label>
                    <br />

                    <button type='submit'>Sign Up</button>
                </form>
                {userData.error ? (<div><p>{userData.error}</p></div>) : null}
                <span>
                    {'Already have an account? '}
                    <Link to='/login'>Login</Link>
                </span>
            </div>
        )
    }

    return (
        <section>
            <div>
                {personalizedSignup}
            </div>
        </section>
    )
}

const mapStateToProps = state => ({
    userData: state.userData.user,
})

const mapDispatchToProps = {
    userSignup,
}

ParentSignup.propTypes = {
    userData: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Object)]).isRequired,
    userSignup: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(ParentSignup)