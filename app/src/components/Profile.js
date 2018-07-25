import React, { Component } from 'react'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class Profile extends Component {

  render() {
    const { profile } = this.props
    const { name, avatarURL, answers, questions } = profile
    const questionsAnswered = Object.keys(answers).length
    const questionsAsked = questions.length

    return (
      profile
        ? (
          <div className='card flex-horizontal flex-center'>
            {/* Header */}
            <div className='flex-1 flex-center'>
              <img className='avatar round'
                src={avatarURL}
                alt={`Avatar of ${name}`}
              />
            </div>
            {/* Profile statistic */}
            <div className='flex-2'>
              <h1 className='blue'>{name} - Profile</h1>
              <h3>Answered Questions: {questionsAnswered}</h3>
              <h3>Created Questions: {questionsAsked}</h3>
            </div>
            {/* Points of the user. Sum of Asked-/Answered-Questions */}
            <div className='flex-1 flex-center'>
              <div className='score-bubble flex-center flex-vertical'>
                <h1>{questionsAnswered + questionsAsked}</h1>
                <h2>Points</h2>
              </div>
            </div>
          </div>
        )
        : (<p>This profile does not exists</p>)
    );
  }
}

Profile.propTypes = {
  id: PropTypes.string.isRequired
}

function mapStateToProps({ users }, { id }) {
  return {
    profile: users[id]
  }
}

export default connect(mapStateToProps)(Profile)