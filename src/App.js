import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import getAutoLogin from './fetches/getAutoLogin'
import Login from './pages/Login'
import WelcomePage from './pages/WelcomePage'
import CaregiverSignup from './pages/CaregiverSignup'
import ParentSignup from './pages/ParentSignup'
import CaregiverDashboard from './pages/CaregiverDashboard'
import ParentDashboard from './pages/ParentDashboard'
import CaregiverJobMatches from './components/CaregiverJobMatches'
import CreateJob from './components/CreateJob'

const App = ({ getAutoLogin }) => {
  const usertype = localStorage.getItem('usertype')
  const usertoken = localStorage.getItem('token')

  useEffect(() => {
    if (usertype && usertoken) {
      getAutoLogin(usertype)
    }
  }, [getAutoLogin, usertype, usertoken])

  return (
    <div>
      <div>
        <Switch>
          <Route exact path='/' component={WelcomePage} />
          <Route exact path='/welcome' component={WelcomePage} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/caregiver/signup' component={CaregiverSignup} />
          <Route exact path='/parent/signup' component={ParentSignup} />
          <Route exact path='/caregiver-dashboard' component={CaregiverDashboard} />
          <Route exact path='/parent-dashboard' component={ParentDashboard} />
          <Route exact path='/post-job' component={CreateJob} />
        </Switch>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  userData: state.userData,
})

const mapDispatchToProps = {
  getAutoLogin
}

App.propTypes = {
  getAutoLogin: PropTypes.func.isRequired,
  userData: PropTypes.instanceOf(Object).isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)