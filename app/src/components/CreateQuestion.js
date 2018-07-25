import React, { Component } from 'react'

import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

import PropTypes from 'prop-types'

import * as QuestionActions from '../redux/actions/questionsAction'
import { connect } from 'react-redux'

import { Redirect } from 'react-router'

class CreateQuestion extends Component {

  maxLengthForOption = 40;

  state = {
    optionOne: '',
    optionTwo: '',
    redirectToDashboard: false
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.dispatch(
      QuestionActions.handleQuestionCreate(
        this.state.optionOne,
        this.state.optionTwo,
        this.props.auth.id
      )
    )
    this.setState({
      redirectToDashboard: true
    })
  }

  handleOptionInputChange(key, value) {
    if (value.length <= this.maxLengthForOption) {
      this.setState({
        [key]: value
      })
    }
  }

  render() {
    const { optionOne, optionTwo, redirectToDashboard } = this.state;
    const { owner, avatarURL } = this.props

    if (redirectToDashboard) {
      return <Redirect to='/' />
    }

    return (
      <div className='card'>
        {/* Header */}
        <h2>Create new Question</h2>
        <hr />
        {/* Body */}
        <div className='card-content'>
          {/* Left-Side (Avatar) */}
          <div className='question-avatar-container flex-center'>
            <img className='avatar round'
              src={this.props.auth.avatarURL}
              alt={`Avatar of ${this.props.auth.name}`}
            />
          </div>
          {/* Right-Side (Form) */}
          <div className='question-content-container'>
            <h1 className="blue">Would you rather?</h1>
            {/* Options */}
            <input
              className='m-t-1'
              type="text"
              value={optionOne}
              placeholder='Option A...'
              onChange={(event) => { this.handleOptionInputChange('optionOne', event.target.value) }}
            />
            {optionOne.length > (this.maxLengthForOption / 2)
              ? <p className='inputfield-hint'>{this.maxLengthForOption - optionOne.length} chars left</p>
              : <p className='inputfield-hint' />} {/* Avoids UI-resizing when a error gets shown */}
            <input
              className='m-t-2'
              type="text"
              placeholder='Option B...'
              value={optionTwo}
              onChange={(event) => { this.handleOptionInputChange('optionTwo', event.target.value) }}
            />
            {console.log(optionTwo)}
            {optionTwo.length > (this.maxLengthForOption / 2)
              ? <p className='inputfield-hint'>{this.maxLengthForOption - optionTwo.length} chars left</p>
              : <p className='inputfield-hint' />} {/* Avoids UI-resizing when a error gets shown */}
            {/* Submit-Button */}
            <button
              disabled={!optionOne || !optionTwo}
              className='submit-btn m-t-2 m-b-1'
              onClick={this.handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}


function mapStateToProps({ auth }, props) {
  return {
    auth
  }
}

export default connect(mapStateToProps)(CreateQuestion)