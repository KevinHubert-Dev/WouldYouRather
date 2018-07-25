import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import * as AuthActions from '../redux/actions/authAction'

import { connect } from 'react-redux'

class Navigation extends Component {

  handleLogoutClick = () => {
    this.props.dispatch(AuthActions.unsetAuthedUser())
  }

  render() {
    if (!this.props.auth) {
      return null
    }

    return (
      <div className='flex-horizontal flex-center'>
        <p>Hello, {this.props.auth.name}</p>
        <img className='avatar small round'
          src={this.props.auth.avatarURL}
          alt={`Avatar of ${this.props.auth.name}`}
        />
        <a className='logout' onClick={this.handleLogoutClick}>Logout</a>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    auth
  }
}

export default connect(mapStateToProps)(Navigation)