import React, { Component } from 'react'

import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

import PropTypes from 'prop-types'


class Question extends Component {

  render() {
    const { name, avatarURL, questionsAnswered, questionsAsked } = this.props

    return (
      <div className='card profile-card flex-horizontal'>
        {/* Header */}
        <div className='flex-1 flex-center'>
          <img className='profile-avatar'
            src={avatarURL}
            alt={`Avatar of ${name}`}
          />
        </div>
        <div className='flex-2'>
          <h1 className='colorful'>{name} - Profile</h1>
          <h3>Asked Questions: {questionsAnswered}</h3>
          <h3>Created Questions: {questionsAsked}</h3>
        </div>
        <div className='flex-1 flex-center'>
          <div className='score-bubble flex-center flex-vertical'>
            <h1>{questionsAnswered + questionsAsked}</h1>
            <h2>Points</h2>
          </div>
        </div>
      </div>
    );
  }
}

Question.propTypes = {
  name: PropTypes.string.isRequired,
  avatarURL: PropTypes.string.isRequired,
  questionsAnswered: PropTypes.number.isRequired,
  questionsAsked: PropTypes.number.isRequired
}

export default Question