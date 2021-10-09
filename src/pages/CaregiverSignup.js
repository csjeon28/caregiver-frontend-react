import React, { useState } from 'react'
import { Redirect } from 'react-router'
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import userSignup from '../fetches/userSignup'
import Copyright from '../components/Copyright'
import ContactsIcon from '@mui/icons-material/Contacts'
import {
    Alert, AlertTitle, Avatar, Box, Button, Container, CssBaseline,
    Divider, Grid, Link, TextField, Typography
} from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme()

const CaregiverSignup = ({ userSignup, userData }) => {
    const [user, setUser] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        date_of_birth: '',
        bio: '',
        city: '',
        state: '',
        country: '',
        language: '',
        hourly_rate: '',
        smoker: '',
        ability_to_drive: '',
        first_aid_cert: '',
        CPR_cert: '',
        profile_image: '',
    })

    const userType = 'caregiver'

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
            date_of_birth: '',
            bio: '',
            city: '',
            state: '',
            country: '',
            language: '',
            hourly_rate: '',
            smoker: '',
            ability_to_drive: '',
            first_aid_cert: '',
            CPR_cert: '',
            profile_image: '',
        })
    }

    let personalizedSignup;
    if (userData.token) {
        personalizedSignup = <Redirect to='/caregiver-dashboard' />
    } else {
        personalizedSignup = (
            <ThemeProvider theme={theme}>
                <Container component='main' maxWidth='xs'>
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <ContactsIcon />
                        </Avatar>
                        <Typography component='h1' variant='h5'>
                            Caregiver Sign up
                        </Typography>
                        <Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id='first_name'
                                        label='First Name'
                                        name='first_name'
                                        autoFocus
                                        autoComplete='fname'
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id='last-name'
                                        label='Last Name'
                                        name='last_name'
                                        autoComplete='lname'
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id='email'
                                        type='email'
                                        label='Email Address'
                                        name='email'
                                        autoComplete='email'
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name='password'
                                        label='Password'
                                        type='password'
                                        id='password'
                                        autoComplete='new-password'
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name='date_of_birth'
                                        label='Date of Birth'
                                        type='date'
                                        id='date_of_birth'
                                        InputLabelProps={{ shrink: true }}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id='bio'
                                        multiline
                                        name='bio'
                                        label='About me'
                                        maxRows={4}
                                        // value={user.bio}
                                        variant='standard'
                                        onChange={handleChange}
                                    />
                                </Grid>


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
                                <label htmlFor='hourly_rate'>
                                    <input name='hourly_rate' id='hourly_rate' type='number' placeholder='Hourly Rate' onChange={handleChange} />
                                </label><br />

                                <label htmlFor='smoker'>Smoker
                                    <input name='smoker' id='smoker' type='checkbox' onChange={handleChange} />
                                </label>

                                <label htmlFor='ability_to_drive'>I can drive
                                    <input name='ability_to_drive' id='ability_to_drive' type='checkbox' onChange={handleChange} />
                                </label>

                                <label htmlFor='first_aid_cert'>First Aid Certified
                                    <input name='first_aid_cert' id='first_aid_cert' type='checkbox' onChange={handleChange} />
                                </label>

                                <label htmlFor='CPR_cert'>CPR Certified
                                    <input name='CPR_cert' id='CPR_cert' type='checkbox' onChange={handleChange} /><br />
                                </label>

                                <label htmlFor='profile_image'>Profile Image
                                    <input name='profile_image' type='file' id='profile_image' onChange={handleChange} />
                                </label>

                                <Button
                                    type='submit'
                                    fullWidth
                                    variant='contained'
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Sign Up
                                </Button>
                                {userData.error ? (<Alert severity='error'><AlertTitle>Error</AlertTitle>{userData.error}</Alert>) : null}
                                <Divider />
                                <Typography variant='body1' align='center' >
                                    Already have an account? <br />
                                    <Link href='/login' variant='body1'>
                                        Log In
                                    </Link>
                                </Typography>
                            </Grid>
                            <Copyright sx={{ mt: 8, mb: 4 }} />
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider >
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
    userData: state.userData.user
})

const mapDispatchToProps = {
    userSignup
}

CaregiverSignup.propTypes = {
    userData: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Object)]).isRequired,
    userSignup: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(CaregiverSignup)