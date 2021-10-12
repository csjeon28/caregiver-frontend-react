import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import Logout from './Logout'

const SideDashboard = ({ userType }) => {
    let personalSideDashboard

    if (userType === 'caregiver') {
        personalSideDashboard = (
            <div>
                <NavLink exact to='/caregiver-dashboard' activeClassName='selected'>
                    My CareGiver Dashboard
                </NavLink>&nbsp;-&nbsp;
                <NavLink exact to='/jobs' activeClassName='selected'>
                    My Jobs
                </NavLink>
                <Logout />
            </div>
        )
    }

    if (userType === 'parent') {
        personalSideDashboard = (
            <div>
                <NavLink to='/parent-dashboard' activeClassName='selected'>
                    My Parent/Guardian Dashboard
                </NavLink>&nbsp;-&nbsp;
                <NavLink to='/new-job' activeClassName='selected'>
                    Post a Job
                </NavLink>&nbsp;-&nbsp;
                <NavLink to='/create-schedule' activeClassName='selected'>
                    Create Schedule
                </NavLink>
                <Logout />
            </div>
        )
    }
    return (
        <div>
            {personalSideDashboard}
        </div>
    )
}

SideDashboard.propTypes = {
    userType: PropTypes.string
}

// SideDashboard.defaultProps = {
//     userType: null,
// }

export default SideDashboard