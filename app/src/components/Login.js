import React, { Component } from 'react'

import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

import ReactLogo from '../img/react.png'

import Question from './Question'

class Login extends Component {

  state = {
    selectedUser: undefined
  }

  handleClick = (event) => {
    event.preventDefault()
  }

  handleDropdownChange = (item) => {
    this.setState({
      selectedUser: item
    })
  }

  render() {
    return (

      <div className='card small'>
        {/* Header */}
        <h1 className='center'>Welcome to 'Would you Rather'</h1>
        <h2 className='center'>Select a user to continue</h2>
        <hr />
        {/* Body */}
        <div className='flex-vertical flex-center user-selection '>
          {this.state.selectedUser
            ? <img src={'TODO:'} alt={`Avatar of ${this.state.selectedUser}`} className='avatar' />
            : <img src={ReactLogo} alt='React Logo' className='logo' />
          }
          <Dropdown options={['val1', 'val2', 'val3']}
            placeholder='Select a user'
            onChange={this.handleDropdownChange}
            value={this.state.selectedUser}
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

export default Login