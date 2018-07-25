import React, { Component } from 'react'

import Dropdown from 'react-dropdown'

import * as QuestionAction from '../redux/actions/questionsAction'

import { connect } from 'react-redux'
import { Line } from 'rc-progress'

import 'react-dropdown/style.css'


class Question extends Component {

  state = {
    selectedOption: undefined
  }

  componentDidMount() {
    this.setState({ selectedOption: this.props.answered })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.dispatch(QuestionAction.handleQuestionAnswer(this.props.auth.id, this.props.question.id, this.state.selectedOption))
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
            <h1 className="blue">Would you rather...</h1>
            {/* Options */}
            <div className='question-option'>
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
                this.props.answered &&
                <div className='flex-horizontal flex-center'>
                  <Line percent={optionOnePercent} strokeWidth="2" strokeColor="#4169ff" />
                  <p className='m-l-1'>{optionOnePercent}%</p>
                </div>
              }
            </div>
            <div className='question-option'>
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
                this.props.answered &&
                <div className='flex-horizontal flex-center'>
                  <Line percent={optionTwoPercent} strokeWidth="2" strokeColor="#4169ff" />
                  <p className='m-l-1'>{optionTwoPercent}%</p>
                </div>
              }
            </div>
            {/* Submit-Button */}
            {
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
    question: questions[id],
    author: users[questions[id].author],
    auth,
    answered: users[auth.id].answers[id] ? users[auth.id].answers[id] : null,
  }
}

export default connect(mapStateToProps)(Question)