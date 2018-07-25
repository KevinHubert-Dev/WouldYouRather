import React, { Component } from 'react'

import Dropdown from 'react-dropdown'
import Question from './Question'
import 'react-dropdown/style.css'

import ReactLogo from '../img/react.png'

import * as AuthActions from '../redux/actions/authAction'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'

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

    if (this.state.redirectToDashboard) {
      return <Redirect to='/' />
    }

    if (this.props.users === null) {
      return <p>LOADING</p>
    }

    const availableUsername = []
    Object.keys(this.props.users).map((key) => {
      availableUsername.push({ value: this.props.users[key], label: this.props.users[key].name })
    })

    return (

      <div className='card small'>
        {/* Header */}
        <h1 className='center'>Welcome to 'Would you Rather'</h1>
        <h2 className='center'>Select a user to continue</h2>
        <hr />
        {/* Body */}
        <div className='flex-vertical flex-center user-selection '>
          {this.state.selectedUser && !this.state.loadingImg
            ? /* Show image of selected user */
            <img
              src={this.state.selectedUser.avatarURL}
              alt={`Avatar of ${this.state.selectedUser.name}`}
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
            value={this.state.selectedUser
              ? this.state.selectedUser.name
              : "Select a user"

            }
          />
          <button
            className='m-t-2 m-b-2'
            disabled={!this.state.selectedUser ? true : false}
            onClick={(e) => this.handleClick(e)}
          >
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