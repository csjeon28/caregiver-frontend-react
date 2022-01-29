import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import userSignup from '../fetches/userSignup'
import Copyright from '../components/Copyright'
import PasswordReq from '../components/PasswordReq'
import ContactsIcon from '@mui/icons-material/Contacts'
import {
    Alert, AlertTitle, Avatar, Box, Button, Container, CssBaseline, Divider, FormControl,
    FormControlLabel, FormGroup, Grid, InputAdornment, InputLabel, Link, OutlinedInput, Switch, TextField, Typography
} from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { teal, blue } from '@mui/material/colors'

const theme = createTheme()

const CaregiverSignup = ({ userSignup, userData }) => {
    const [user, setUser] = useState({
        smoker: false,
        CPR_cert: false,
        first_aid_cert: false,
        ability_to_drive: false,
        hourly_rate: 0
    })
    const userType = 'caregiver'

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

    const handleChecked = (e) => {
        const { name, checked } = e.target
        setUser({ ...user, [name]: checked })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const userObject = { [userType]: user }
        userSignup(userObject, userType)
        setUser(user)
    }

    let personalizedSignup = (
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
                    <Avatar sx={{ m: 1, bgcolor: teal[300] }}>
                        <ContactsIcon />
                    </Avatar>
                    <Typography component='h1' variant='h5' sx={{ color: teal[500] }}>
                        Caregiver Registration
                    </Typography>
                    <Box component='form' noValidate sx={{ mt: 2 }}>
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
                                    onChange={handleChange}
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
                                    onChange={handleChange}
                                />
                            </Grid>
                            <PasswordReq />
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name='password'
                                    label='Password'
                                    type='password'
                                    id='password'
                                    autoComplete='new-password'
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    name='date_of_birth'
                                    label='Date of Birth'
                                    type='date'
                                    id='date_of_birth'
                                    InputLabelProps={{ shrink: true }}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl required variant='outlined'>
                                    <InputLabel>Hourly Rate</InputLabel>
                                    <OutlinedInput
                                        id='hourly_rate'
                                        name='hourly_rate'
                                        type='number'
                                        onChange={handleChange}
                                        startAdornment={<InputAdornment position='start'>$</InputAdornment>}
                                        label='Hourly Rate'
                                        inputProps={{ min: 0, step: 5 }}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id='city'
                                    label='City'
                                    name='city'
                                    autoComplete='city'
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id='state'
                                    label='State'
                                    name='state'
                                    autoComplete='state'
                                    onChange={handleChange}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                required
                                    fullWidth
                                    id='bio'
                                    multiline
                                    name='bio'
                                    label='A Little About Yourself'
                                    maxRows={4}
                                    variant='outlined'
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id='language'
                                    label='Language(s) Spoken'
                                    name='language'
                                    autoComplete='language'
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormGroup>
                                    <FormControlLabel
                                        control={<Switch
                                            checked={user.smoker}
                                            name='smoker'
                                            onChange={handleChecked}
                                            inputProps={{ 'aria-label': 'controlled' }} />}
                                        label='Smoker'
                                    />
                                    <FormControlLabel
                                        control={<Switch
                                            checked={user.ability_to_drive}
                                            name='ability_to_drive'
                                            onChange={handleChecked}
                                            inputProps={{ 'aria-label': 'controlled' }} />}
                                        label='Proof of Drivers License' />
                                </FormGroup>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormGroup>
                                    <FormControlLabel
                                        control={<Switch
                                            checked={user.CPR_cert}
                                            name='CPR_cert'
                                            onChange={handleChecked}
                                            inputProps={{ 'aria-label': 'controlled' }} />}
                                        label='CPR Certified' />
                                    <FormControlLabel
                                        control={<Switch
                                            checked={user.first_aid_cert}
                                            name='first_aid_cert'
                                            onChange={handleChecked}
                                            inputProps={{ 'aria-label': 'controlled' }} />}
                                        label='First Aid Certified' />
                                </FormGroup>
                            </Grid>
                            <Button
                                type='submit'
                                fullWidth
                                variant='contained'
                                sx={{ mt: 3, mb: 2, ml: 4, mr: 2, bgcolor: blue[900] }}
                                onClick={handleSubmit}
                            >
                                Sign Up
                            </Button>
                        </Grid>
                        <Divider />
                        <Typography variant='body1' align='center' >
                            Already have an account? <br />
                            <Link href='/login' variant='body1'>
                                Log In
                            </Link>
                        </Typography>
                        {userData.error ? (<Alert severity='error'><AlertTitle>Error</AlertTitle>
                            {userData.error.map((error, index) => { return (<li key={index}>{error}</li>) })}</Alert>) : null}
                        <Copyright sx={{ mt: 8, mb: 4 }} />
                    </Box>
                </Box>
            </Container>
        </ThemeProvider >
    )

    if (userData.token) { personalizedSignup = <Redirect to='/caregiver-dashboard' /> }

    return (
        <div>
            {personalizedSignup}
        </div>
    )
}

const mapStateToProps = state => ({
    userData: state.userData.user
})

const mapDispatchToProps = {
    userSignup
}

CaregiverSignup.propTypes = {
    userData: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.instanceOf(Object)]).isRequired,
    userSignup: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(CaregiverSignup)