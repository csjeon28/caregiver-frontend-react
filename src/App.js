import React, { useEffect } from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import getAutoLogin from './fetches/getAutoLogin'
import Header from './components/Header'
import Login from './components/Login'
import SideDashboard from './components//SideDashboard'
import CaregiverSignup from './pages/CaregiverSignup'
import ParentSignup from './pages/ParentSignup'
import CaregiverDashboard from './pages/CaregiverDashboard'
import ParentDashboard from './pages/ParentDashboard'
import CaregiverJobMatches from './components/CaregiverJobMatches'

const App = ({ getAutoLogin, userData }) => {
  const usertype = localStorage.getItem('usertype')
  const usertoken = localStorage.getItem('token')

  useEffect(() => {
    if (usertype && usertoken) {
      getAutoLogin(usertype)
    }
  }, [getAutoLogin, usertype, usertoken])

  const caregiverHome = (usertype === 'caregiver') ? <Redirect to='/caregiver-dashboard' /> : <Redirect to='/parent-dashboard' />

  return (
    <div className='App'>
      {/* <h1>Hello</h1> */}
      {userData.isLoggedIn ? <Header /> : null}
      {userData.isLoggedIn ? <SideDashboard userType={usertype} /> : null}
      <SideDashboard />
      <div>
        <Switch>
          <Route exact path='/' render={() => (userData.isLoggedIn ? caregiverHome : <Redirect to='/login' />)} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/caregiver/signup' component={CaregiverSignup} />
          <Route exact path='/parent/signup' component={ParentSignup} />
          <Route exact path='/caregiver-dashboard' component={CaregiverDashboard} />
          <Route exact path='/parent-dashboard' component={ParentDashboard} />
          <Route exact path='/job-matches' component={CaregiverJobMatches} />
          <Route />
        </Switch>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  userData: state.userData,
})

const mapDispatchToProps = {
  getAutoLogin,
}

App.propTypes = {
  getAutoLogin: PropTypes.func.isRequired,
  userData: PropTypes.instanceOf(Object).isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)