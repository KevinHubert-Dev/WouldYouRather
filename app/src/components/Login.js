import React, { Component } from 'react'

import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

import * as AuthActions from '../redux/actions/authAction'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import ReactLogo from '../img/react.png'

class Login extends Component {

  state = {
    selectedUser: undefined,
    redirectToDashboard: false
  }

  handleClick = (event) => {
    event.preventDefault()
    this.props.dispatch(AuthActions.setAuthedUser(this.state.selectedUser))
    this.setState({ redirectToDashboard: true })
  }

  handleDropdownChange = (item) => {
    this.setState({
      selectedUser: item.value
    })
  }

  render() {

    const { redirectToDashboard, loadingImg, selectedUser } = this.state
    const { users } = this.props

    /* Redirect when login done */
    if (redirectToDashboard) {
      return <Redirect to='/' />
    }

    /* Wait till data received from API */
    if (users === null) {
      return <p>LOADING</p>
    }

    const availableUsername = []
    Object.keys(users).map((key) => {
      availableUsername.push({ value: users[key], label: users[key].name })
    })

    return (

      <div className='card small'>
        {/* Header */}
        <h1 className='center'>Welcome to 'Would you Rather'</h1>
        <h2 className='center'>Select a user to continue</h2>
        <hr />
        {/* Body */}
        <div className='flex-vertical flex-center user-selection '>
          {selectedUser && !loadingImg
            ? /* Show image of selected user */
            <img
              src={selectedUser.avatarURL}
              alt={`Avatar of ${selectedUser.name}`}
              className='logo round'
            />
            : /* Show react-logo because no user is selected yet */
            <img
              src={ReactLogo}
              alt='React Logo'
              className='logo rotating'
            />
          }
          <Dropdown
            options={availableUsername}
            placeholder='Select a user'
            onChange={this.handleDropdownChange}
            value={selectedUser
              ? selectedUser.name
              : "Select a user"
            }
          />
          <button
            className='m-t-2 m-b-2'
            disabled={!selectedUser ? true : false}
            onClick={(e) => this.handleClick(e)}>
            Select this User
        </button>
        </div>
      </div>

    );
  }

}

function mapStateToProps({ users }) {
  return {
    users
  }
}

export default connect(mapStateToProps)(Login)