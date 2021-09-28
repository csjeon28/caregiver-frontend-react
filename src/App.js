import React, { useEffect } from 'react'
import autoLogin from './fetches/autoLogin'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Header from './components/Header'
import SideDashboard from './components//SideDashboard'

const App = ({ autoLogin, userData }) => {
  const usertype = localStorage.getItem('usertype')
  const usertoken = localStorage.getItem('token')

  useEffect(() => {
    if (usertype && usertoken) {
      autoLogin(usertype)
    }
  }, [autoLogin, usertype, usertoken])

  return (
    <div className="App">
      {/* <h1>Hello</h1> */}
      {userData.isLoggedIn ? <Header /> : null}
      {userData.isLoggedIn ? <SideDashboard userType={usertype} /> : null}
      <SideDashboard />
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