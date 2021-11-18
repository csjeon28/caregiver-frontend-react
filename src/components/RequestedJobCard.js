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

    return (
        <Grid item xs={12} sm={6} md={4} >
            <Card sx={{ minHeight: 240, height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 5, color: purple[200], bgcolor: cyan[50] }}>
                <CardHeader
                    title={job.title}
                    sx={{ textTransform: 'uppercase', flexWrap: 'wrap' }}
                />
                <Divider />
                <Typography component='span' variant='body1' align='left' sx={{ boxShadow: 2, padding: 0.7, color: pink[300], mr: 2, ml: 2, fontSize: 13 }}>
                    Posted by: {parentName}
                </Typography>
                <CardContent sx={{ padding: 2 }}>
                    <Typography variant='body2' color='text.secondary'>
                        Pay Rate: &nbsp;${job.hourly_rate} / hour<br />
                        Number of Children: {job.number_of_children}<br />
                        Days Needed: {job.specific_days_needed}
                    </Typography>
                </CardContent>
            </Card>
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