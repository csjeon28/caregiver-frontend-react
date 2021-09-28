import React, { useEffect } from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import autoLogin from './fetches/autoLogin'
import Header from './components/Header'
import Login from './components/Login'
import SideDashboard from './components//SideDashboard'
import CaregiverSignup from './pages/CaregiverSignup'
import ParentSignup from './pages/ParentSignup'

const App = ({ autoLogin, userData }) => {
  const usertype = localStorage.getItem('usertype')
  const usertoken = localStorage.getItem('token')

  useEffect(() => {
    if (usertype && usertoken) {
      autoLogin(usertype)
    }
  }, [autoLogin, usertype, usertoken])

  const caregiverHome = (usertype === 'caregiver') ? <Redirect to='/home' /> : <Redirect to='/dashboard' />

  return (
    <div className="App">
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
        </Switch>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  userData: state.userData,
})

const mapDispatchToProps = {
  autoLogin,
}

App.propTypes = {
  autoLogin: PropTypes.func.isRequired,
  userData: PropTypes.instanceOf(Object).isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)