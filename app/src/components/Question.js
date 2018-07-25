import React, { Component } from 'react'

import * as QuestionAction from '../redux/actions/questionsAction'
import { connect } from 'react-redux'
import { Line } from 'rc-progress'


class Question extends Component {

  state = {
    selectedOption: this.props.answered
  }

  onSubmit = (event) => {
    const { auth, question, dispatch } = this.props
    event.preventDefault()
    dispatch(QuestionAction.handleQuestionAnswer(auth.id, question.id, this.state.selectedOption))
  }

  calcPercent = (num, entire) => {
    return Math.round(num / entire * 100)
  }

  render() {
    const { question, author, auth, answered } = this.props
    const { optionOne, optionTwo } = question
    const { name, avatarURL } = author
    const { selectedOption } = this.state;

    const votesCount = optionOne.votes.length + optionTwo.votes.length
    const optionOneVotes = optionOne.votes.length
    const optionTwoVotes = optionTwo.votes.length
    const optionOnePercent = this.calcPercent(optionOne.votes.length, votesCount)
    const optionTwoPercent = this.calcPercent(optionTwo.votes.length, votesCount)

    return (
      <div className='card'>
        {/* Header */}
        <h2>Question by {name}</h2>
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
            <div className='question-option  max-width'>
              <label>
                <input
                  type="radio"
                  name="questionAnswer"
                  value={optionOne.text}
                  disabled={answered}
                  checked={selectedOption === 'optionOne'}
                  onClick={() => { this.setState({ selectedOption: 'optionOne' }) }}
                />
                {optionOne.text}
              </label>
              {
                /* Add statistic if question was answered */
                this.props.answered &&
                <div className='flex-horizontal flex-center '>
                  <Line percent={optionOnePercent} strokeWidth="2" strokeColor="#4169ff" />
                  <p className='m-l-1'>{optionOne.votes.length} {optionOneVotes !== 1 ? 'votes' : 'vote'} ({optionOnePercent}%)</p>
                </div>
              }
            </div>
            <div className='question-option max-width'>
              <label>
                <input
                  type="radio"
                  name="questionAnswer"
                  value={optionTwo.text}
                  disabled={answered}
                  checked={this.state.selectedOption === 'optionTwo'}
                  onClick={() => { this.setState({ selectedOption: 'optionTwo' }) }}
                />
                {optionTwo.text}
              </label>
              {
                /* Add statistic if question was answered */
                this.props.answered &&
                <div className='flex-horizontal flex-center'>
                  <Line percent={optionTwoPercent} strokeWidth="2" strokeColor="#4169ff" />
                  <p className='m-l-1'>{optionTwoVotes} {optionTwoVotes !== 1 ? 'votes' : 'vote'} ({optionTwoPercent}%)</p>
                </div>
              }
            </div>
            {
              /* Submit-Button */
              answered
                ? <button disabled className='submit-btn m-t-2 m-b-1m' onClick={this.onSubmit}>You cannot vote again...</button>
                : <button disabled={!selectedOption} className='submit-btn m-t-2 m-b-1m' onClick={this.onSubmit}>Submit</button>
            }
          </div>
        </div>
      </div>
    );
  }
}


function mapStateToProps({ questions, auth, users }, { match }) {
  const { id } = match.params
  return {
    auth,
    question: questions[id],
    author: users[questions[id].author],
    answered: users[auth.id].answers[id] ? users[auth.id].answers[id] : null,
  }
}

export default connect(mapStateToProps)(Question)