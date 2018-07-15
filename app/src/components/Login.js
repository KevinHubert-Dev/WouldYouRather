import React, { Component } from 'react'

import Card from './Card'

import ReactLogo from '../img/react.png'

class Login extends Component {

  state = {
    username: ''
  }

  render() {
    return (
      <Card title="Welcome to 'Would you Rather'" description='Login to continue'>
        <div className='center-content'>
          <h1 className="colorful">Sign In</h1>
          <img src={ReactLogo} className='logo'/>
        </div>
      </Card>
    );
  }

}

export default Login