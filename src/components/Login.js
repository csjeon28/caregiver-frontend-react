import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Copyright from './Copyright'
import userLogin from '../fetches/userLogin'
import {
    Alert, AlertTitle, Avatar, Box, Button, CssBaseline, Divider, FormControl,
    Grid, InputLabel, LinearProgress, Link, MenuItem, Paper, Select, TextField, Typography
} from '@mui/material'
import LockOpenIcon from '@mui/icons-material/LockOpen'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Image from '../images/caregiver_background.jpeg'

const theme = createTheme()

const Login = ({ userLogin, userData }) => {
    const [user, setUser] = useState({
        email: '',
        password: '',
    })
    const [userType, setUserType] = useState('')
    const [progress, setProgress] = useState(0)
    const isEnabled = user.email.length > 0 && user.password.length > 0 && userType

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
            password: ''
        })
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    return 0
                }
                const diff = Math.random() * 10
                return Math.min(oldProgress + diff, 100)
            })
        }, 500)

        return () => {
            clearInterval(timer)
        }
    }, [])

    let personalizedLogin = (
        <ThemeProvider theme={theme}>
            <Grid container component='main' sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: `url(${Image})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (c) =>
                            c.palette.mode === 'light' ? c.palette.grey[50] : c.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOpenIcon />
                        </Avatar>
                        <Typography component='h1' variant='h5'>
                            Log In
                        </Typography>
                        <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <Typography variant='subtitle2' color='red' align='right'>* Required Fields</Typography>
                            <TextField
                                margin='normal'
                                required
                                fullWidth
                                id='email'
                                label='Email Address'
                                name='email'
                                autoComplete='email'
                                autoFocus
                                onChange={handleChange}
                            />
                            <TextField
                                margin='normal'
                                required
                                fullWidth
                                name='password'
                                label='Password'
                                type='password'
                                id='password'
                                autoComplete='current-password'
                                onChange={handleChange}
                            />
                            <FormControl fullWidth>
                                <InputLabel required id='usertype-label'>User Type:</InputLabel>
                                <Select
                                    labelId='usertype-label'
                                    id='usertype'
                                    value={userType}
                                    label='Usertype'
                                    onChange={handleUserType}
                                >
                                    <MenuItem value=''>Choose Account Type:</MenuItem>
                                    <MenuItem value='caregiver'>Caregiver</MenuItem>
                                    <MenuItem value='parent'>Parent/Guardian</MenuItem>
                                </Select>
                            </FormControl>
                            <Button
                                type='submit'
                                fullWidth
                                variant='contained'
                                sx={{ mt: 3, mb: 2 }}
                                disabled={!isEnabled}
                            >
                                Log In
                            </Button>
                            <Divider />
                            <Typography variant='body1' align='center' >
                                Don't have an account? <br />
                                Sign up as:&nbsp;
                                <Link href='/caregiver/signup' variant='body1'>
                                    Caregiver
                                </Link>{' or '}
                                <Link href='/parent/signup' variant='body1'>
                                    Parent/Guardian
                                </Link>
                            </Typography>
                            {userData.user.error ? (<Alert severity='error'><AlertTitle>Error</AlertTitle>{userData.user.error}</Alert>) : null}
                        </Box>
                    </Box>
                    <Copyright sx={{ mt: 8, mb: 4 }} />
                </Grid>
            </Grid>
        </ThemeProvider>
    )

    if (userData.loading) {
        personalizedLogin = <Box sx={{ width: '100%' }}><LinearProgress variant='determinate' value={progress} /></Box>
    }

    if (userData.userType === 'caregiver' && !userData.user.error) { personalizedLogin = <Redirect to='/caregiver-dashboard' /> }
    if (userData.userType === 'parent' && !userData.user.error) { personalizedLogin = <Redirect to='/parent-dashboard' /> }

    return (
        <div>
            {personalizedLogin}
        </div>
    )
}

const mapStateToProps = state => ({
    userData: state.userData,
})

const mapDispatchToProps = {
    userLogin
}

Login.propTypes = {
    userData: PropTypes.instanceOf(Object).isRequired,
    userLogin: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)