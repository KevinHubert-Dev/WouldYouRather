import React, { Component } from 'react'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class QuestionPreview extends Component {

  render() {
    const { optionOne, optionTwo } = this.props.question
    const { name, avatarURL } = this.props.author

    if (!this.props.question || !this.props.author) {
      return <p>This Tweet does not exists</p>
    }

    return (
      <div className='card'>
        {/* Header */}
        <h2>Question by '{name}'</h2>
        <hr />
        {/* Body */}
        <div className='card-content'>
          {/* Left-Side (Avatar) */}
          <div className='question-avatar-container flex-center'>
            <img className='avatar round'
              src={avatarURL}
              alt={`Avatar of ${name}`}
            />
          </div>
          {/* Right-Side (Form) */}
          <div className='question-content-container'>
            <h1 className="blue">Would you Rather</h1>
            {/* Options */}
            <div className='question-option'>
              <p>...{optionOne.text}...</p>
              <p>...{optionTwo.text}...</p>
            </div>
            {/* Submit-Button */}
            <Link to={`questions/${this.props.id}`}>
              <button className='submit-btn m-t-2 m-b-1m'>
                Open this Question
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

QuestionPreview.propTypes = {
  id: PropTypes.string.isRequired
}

function mapStateToProps({ questions, auth, users }, { id }) {
  return {
    question: questions[id],
    author: users[questions[id].author]
  }
}

export default connect(mapStateToProps)(QuestionPreview)