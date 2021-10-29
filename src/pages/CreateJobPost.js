import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import postJob from '../fetches/postJob'
import WorkIcon from '@mui/icons-material/Work'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import {
    Avatar, Box, Button, Container, CssBaseline, Divider, FormControl, FormControlLabel,
    Grid, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, Switch, TextField, Typography
} from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { purple, blue } from '@mui/material/colors'

const theme = createTheme()

const CreateJobPost = ({ postJob, user }) => {
    const history = useHistory()
    const [job, setJob] = useState({
        number_of_children: '',
        hourly_rate: 0,
        required_to_drive: false,
        specific_days_needed: ''
    })
    const type = 'job'

    const handleChange = e => {
        const { name, value } = e.target
        setJob({ ...job, [name]: value })
    }

    const handleChecked = (e) => {
        const { name, checked } = e.target
        setJob({ ...job, [name]: checked })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const jobObject = { [type]: job }
        postJob(jobObject, user.parent.id)
        setJob(job)
        history.push('/job-listings')
    }

    let personalizedJobForm = (
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
                    <Avatar sx={{ m: 1, bgcolor: purple[600] }}>
                        <WorkIcon />
                    </Avatar>
                    <Typography component='h1' variant='h5' sx={{ color: purple[400] }}>
                        Post a Job
                    </Typography>
                    <Box component='form' noValidate sx={{ mt: 2 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id='title'
                                    type='title'
                                    label='Title'
                                    name='title'
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name='job_description'
                                    label='Job Description'
                                    type='job_description'
                                    id='job_description'
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
                                        value={job.hourly_rate}
                                        onChange={handleChange}
                                        startAdornment={<InputAdornment position='start'>$</InputAdornment>}
                                        label='Hourly Rate'
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth>
                                    <InputLabel id='number_of_children_label'>No. of Children</InputLabel>
                                    <Select
                                        labelId='number_of_children_label'
                                        id='number_of_children'
                                        value={job.number_of_children}
                                        label='Number of Children'
                                        onChange={(e) => setJob({ ...job, number_of_children: e.target.value })}
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
                                    required
                                    fullWidth
                                    id='specific_days_needed'
                                    label='Days Needed'
                                    name='specific_days_needed'
                                    autoComplete='specific_days_needed'
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Switch
                                        checked={job.required_to_drive}
                                        name='required_to_drive'
                                        onChange={handleChecked}
                                        inputProps={{ 'aria-label': 'controlled' }} />}
                                    label='Required to Drive' />
                            </Grid>
                            <Button
                                type='submit'
                                fullWidth
                                variant='contained'
                                sx={{ mt: 3, mb: 2, ml: 4, mr: 2, bgcolor: blue[900] }}
                                onClick={handleSubmit}
                            >
                                Post
                            </Button>
                            <Button sx={{ ml: 2 }} onClick={() => history.push('/parent-dashboard')} startIcon={<ArrowBackIcon />}>Go Back</Button>
                        </Grid>
                        <Divider />
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )

    return (
        <div>
            {personalizedJobForm}
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.userData.user
})

const mapDispatchToProps = {
    postJob
}

CreateJobPost.propTypes = {
    user: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.instanceOf(Object)]).isRequired,
    postJob: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateJobPost)