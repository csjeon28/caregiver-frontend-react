import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import getSchedule from '../fetches/getSchedule'
import ScheduleCard from '../components/ScheduleCard'

const SchedulePage = ({ schedule, error, getSchedule }) => {
    const { parentId } = useParams()

    useEffect(() => {
        getSchedule(parentId)
    }, [getSchedule, parentId])

    let personalizedSchedule

    if (schedule) {
        personalizedSchedule = <ScheduleCard schedule={schedule} />
    }
    if (error) {
        personalizedSchedule = (
            <div>
                Error!
                {error}
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
    error: state.scheduleData.error
})

const mapDispatchToProps = {
    getSchedule
}

SchedulePage.propTypes = {
    schedule: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Array)]).isRequired,
    error: PropTypes.string.isRequired,
    getSchedule: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(SchedulePage)