import React, { Component } from 'react'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router'


const PrivateRoute = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        auth
          ? (<Component {...props} />)
          : (
            <Redirect to={{
              pathname: "/login",
              state: { from: props.location }
            }} />
          )
      }
    />
  )
}

function mapStateToProps({ auth }) {
  return {
    auth
  }
}

export default connect(mapStateToProps)(PrivateRoute)