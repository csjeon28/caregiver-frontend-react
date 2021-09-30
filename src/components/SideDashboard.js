import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const SideDashboard = ({ userType }) => {
    let personalSideDashboard

    if (userType === 'caregiver') {
        personalSideDashboard = (
            <div>
                <NavLink exact to='/caregiver-dashboard' activeClassName='selected'>
                    My CareGiver Dashboard
                </NavLink>
                <NavLink exact to='/jobs' activeClassName='selected'>
                    My Jobs
                </NavLink>
            </div>
        )
    }

    if (userType === 'parent') {
        personalSideDashboard = (
            <div>
                <NavLink to='/parent-dashboard' activeClassName='selected'>
                    My Parent/Guardian Dashboard
                </NavLink>
                <NavLink to='/new-schedule' activeClassName='selected'>
                    Job Schedule
                </NavLink>
            </div>
        )
    }
    return (
        // <aside>
        <div>
            {personalSideDashboard}
        </div>
    )
}

SideDashboard.propTypes = {
    userType: PropTypes.string,
}

SideDashboard.defaultProps = {
    userType: null,
}

export default SideDashboard