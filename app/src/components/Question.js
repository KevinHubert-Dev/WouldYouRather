import React, { Component } from 'react'

import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'


class Question extends Component {

  state = {
    selectedOption: undefined
  }

  onSubmit = (event) => {
    event.preventDefault()
    console.log(this.state.selectedOption)
  }

  render() {
    const { selectedOption } = this.state;
    const { owner, avatarURL, optionOne, optionTwo } = this.props

    return (
      <div className='card'>
        {/* Header */}
        <h2>Question asked by '{owner}'</h2>
        <hr />
        {/* Body */}
        <div className='card-content'>
          {/* Left-Side (Avatar) */}
          <div className='question-avatar-container'>
            <img className='question-avatar'
              src={avatarURL}
              alt={`Avatar of ${owner}`}
            />
          </div>
          {/* Right-Side (Form) */}
          <div className='question-content-container'>
            <h1 className="colorful">Would you rather?</h1>
            {/* Options */}
            <div className='question-option'>
              <label>
                <input
                  type="radio"
                  name="questionAnswer"
                  value={optionOne}
                  checked={selectedOption === optionOne}
                  onClick={() => { this.setState({ selectedOption: optionOne }) }}
                />
                {optionOne}
              </label>
            </div>
            <div className='question-option'>
              <label>
                <input
                  type="radio"
                  name="questionAnswer"
                  value={optionTwo}
                  checked={this.state.selectedOption === optionTwo}
                  onClick={() => { this.setState({ selectedOption: optionTwo }) }}
                />
                {optionTwo}
              </label>
            </div>
            {/* Submit-Button */}
            <button disabled={!selectedOption} className='submit-btn' onClick={this.onSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }

}

export default Question