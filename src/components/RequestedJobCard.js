import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
    Card, CardContent, CardHeader,
    Divider, Grid, Typography
} from '@mui/material'
import { pink, purple, cyan } from '@mui/material/colors'

const RequestedJobCard = ({ job, parentData }) => {

    const parentName = parentData.parents.map(n => {
        if (n.id === job.parent_id) return n.first_name
        return null
    })

    const parentEmail = parentData.parents.map(n => {
        if (n.id === job.parent_id) return n.email
        return null
    })

    const renderJobResponse = () => {
        if (job.caregiver_id !== null) return (
            <>
                <Card sx={{ ml: 2, mr: 2, border: 5, borderColor: pink[50] }}>
                    <Typography sx={{ padding: 1, color: cyan[800], letterSpacing: 1, textAlign: 'center', bgcolor: pink[100] }}>
                        {parentName} accepted your job request!</Typography>
                    <Typography sx={{ textTransform: 'uppercase', fontSize: 13, textAlign: 'left', bgcolor: pink[50], color: purple[800] }}>
                        Contact Info: {parentEmail}</Typography>
                </Card>
            </>
        )
    }

    let jobCardContent = (
        <>
            <CardHeader
                title={job.title}
                sx={{ textTransform: 'uppercase', flexWrap: 'wrap' }}
            />
            <Divider />
            <Typography component='span' variant='body1' align='left' sx={{ boxShadow: 2, padding: 0.7, color: pink[300], mr: 2, ml: 2, fontSize: 13 }}>
                Posted by: {parentName}
            </Typography>
            {renderJobResponse()}
            <CardContent sx={{ padding: 2 }}>
                <Typography variant='body2' color='text.secondary'>
                    Pay Rate: &nbsp;${job.hourly_rate} / hour<br />
                    Number of Children: {job.number_of_children}<br />
                    Days Needed: {job.specific_days_needed}
                </Typography>
            </CardContent>
        </>
    )

    return (
        <Grid item xs={12} sm={6} md={4} >
            {job.caregiver_id !== null ?
                <Card sx={{
                    minHeight: 240, height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 5,
                    bgcolor: purple[100], color: cyan[50]
                }}>
                    {jobCardContent}
                </Card>
                :
                <Card sx={{
                    minHeight: 240, height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 5,
                    color: purple[200], bgcolor: cyan[50]
                }}>
                    {jobCardContent}
                </Card>
            }
        </Grid>
    )
}

const mapStateToProps = state => ({
    parentData: state.parentData,
    jobData: state.jobData
})

RequestedJobCard.propTypes = {
    job: PropTypes.instanceOf(Object).isRequired,
    parentData: PropTypes.instanceOf(Object).isRequired
}

export default connect(mapStateToProps)(RequestedJobCard)