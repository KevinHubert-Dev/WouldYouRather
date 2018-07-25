import React from 'react'

import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

/* Based on: https://tylermcginnis.com/react-router-protected-routes-authentication/ */
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