import React, { useState } from 'react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import userSignup from '../fetches/userSignup'
import Copyright from '../components/Copyright'
import ContactsIcon from '@mui/icons-material/Contacts'
import {
    Alert, AlertTitle, Avatar, Box, Button, Container, CssBaseline, Divider, FormControl, FormControlLabel,
    Grid, InputAdornment, InputLabel, Link, MenuItem, OutlinedInput, Select, Switch, TextField, Typography
} from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { pink, blue } from '@mui/material/colors'

const theme = createTheme()

const ParentSignup = ({ userSignup, userData }) => {
    const [user, setUser] = useState({
        smoker: false,
        has_pets: false,
        number_of_children: ''
    })

    const userType = 'parent'

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
    }

    let personalizedSignup
    if (userData.token) {
        personalizedSignup = <Redirect to='/parent-dashboard' />
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
                        <Avatar sx={{ m: 1, bgcolor: pink[200] }}>
                            <ContactsIcon />
                        </Avatar>
                        <Typography component='h1' variant='h5' sx={{ color: pink[400] }}>
                            Parent/Guardian Registration
                        </Typography>
                        <Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 2 }}>
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
                                <Grid item xs={12} sm={6}>
                                    <FormControl required variant='outlined'>
                                        <InputLabel>Hourly Rate</InputLabel>
                                        <OutlinedInput
                                            id='hourly_rate'
                                            name='hourly_rate'
                                            type='number'
                                            value={user.hourly_rate}
                                            onChange={handleChange}
                                            startAdornment={<InputAdornment position='start'>$</InputAdornment>}
                                            label='Hourly Rate'
                                        // inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FormControl fullWidth>
                                        <InputLabel id='number_of_children_label'>No. of Children</InputLabel>
                                        <Select
                                            labelId='number_of_children_label'
                                            id='number_of_children'
                                            value={user.number_of_children}
                                            label='Number of Children'
                                            onChange={(e) => setUser({ ...user, number_of_children: e.target.value })}
                                        >
                                            <MenuItem value={'1'}>1</MenuItem>
                                            <MenuItem value={'2'}>2</MenuItem>
                                            <MenuItem value={'3'}>3</MenuItem>
                                            <MenuItem value={'4+'}>4+</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        id='bio'
                                        multiline
                                        name='bio'
                                        label='A Little About Yourself'
                                        maxRows={4}
                                        value={user.bio}
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
                                    <FormControlLabel
                                        control={<Switch
                                            checked={user.smoker}
                                            name='smoker'
                                            onChange={handleChecked}
                                            inputProps={{ 'aria-label': 'controlled' }} />}
                                        label='Smoker'
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FormControlLabel
                                        control={<Switch
                                            checked={user.has_pets}
                                            name='has_pets'
                                            onChange={handleChecked}
                                            inputProps={{ 'aria-label': 'controlled' }} />}
                                        label='Pet Owner' />
                                </Grid>
                                <Button
                                    type='submit'
                                    fullWidth
                                    variant='contained'
                                    sx={{ mt: 3, mb: 2, ml: 4, mr: 2, bgcolor: blue[900] }}
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
                            {userData.error ? (<Alert severity='error'><AlertTitle>Error</AlertTitle>{userData.error}</Alert>) : null}
                            <Copyright sx={{ mt: 8, mb: 4 }} />
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
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

ParentSignup.propTypes = {
    userData: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.number, PropTypes.instanceOf(Object)]).isRequired,
    userSignup: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(ParentSignup)