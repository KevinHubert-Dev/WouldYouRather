import React, { Component } from 'react'

import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

import ReactLogo from '../img/react.png'
import Card from './Card'

class Question extends Component {

  render() {
    return (
      <div className='card'>
        {/* Header */}
        <h2>Question asked by '{this.props.owner}'</h2>
        <hr />
        {/* Body */}
        <div className='card-content'>
          {/* Left-Side (Avatar) */}
          <div className='question-avatar-container'>
            <img className='question-avatar'
              src={this.props.avatarURL}
              alt={`Avatar of ${this.props.owner}`}
            />
          </div>
          {/* Right-Side (Form) */}
          <div className='question-content-container'>
            <h1 className="colorful">Would you rather?</h1>
            {/* Options */}
            <div className='question-option'>
              <label>
                <input type="radio" name="gender" value="male" />
                {this.props.optionOne}
              </label>
            </div>
            <div className='question-option'>
              <label>
                <input type="radio" name="gender" value="female" />
                {this.props.optionTwo}
              </label>
            </div>
            {/* Submit-Button */}
            <button className='submit-btn'>
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }

}

export default Question