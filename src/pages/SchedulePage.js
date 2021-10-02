import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import getSchedule from '../fetches/getSchedule'
import ScheduleCard from '../components/ScheduleCard'

const SchedulePage = ({ schedule, loading, error, getSchedule }) => {
    const { parentId } = useParams()

    useEffect(() => {
        getSchedule(parentId)
    }, [])

    let personalizedSchedule
    if (loading) {
        personalizedSchedule = <div className='loading-container'><div className='loading' /></div>
    }
    if (schedule) {
        personalizedSchedule = <ScheduleCard schedule={schedule} />
    }
    if (error) {
        personalizedSchedule = (
            <div>
                Error!
                {error.message}
            </div>
        )
    }

    return (
        <section>
            {personalizedSchedule}
        </section>
    )
}

const mapStateToProps = state => ({
    schedule: state.scheduleData.schedule,
    loading: state.scheduleData.loading,
    error: state.scheduleData.error
})

const mapDispatchToProps = {
    getSchedule
}

SchedulePage.propTypes = {
    schedule: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Array)]).isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    getSchedule: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(SchedulePage)