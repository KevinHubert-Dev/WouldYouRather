import React, { Component } from 'react'

import 'react-dropdown/style.css'

import { connect } from 'react-redux'

import Question from './Question'
import QuestionPreview from './QuestionPreview'

class QuestionList extends Component {

  state = {
    showAnswered: true
  }

  handleToggleFilter = (event) => {
    event.preventDefault()

    this.setState(currState => {
      return { showAnswered: !currState.showAnswered }
    })
  }

  render() {
    const constQuestionsKeyToRender = Object.keys(this.props.questions).filter(questionKey => {
      const found = (
        this.props.questions[questionKey].optionOne.votes.includes(this.props.auth.id) ||
        this.props.questions[questionKey].optionTwo.votes.includes(this.props.auth.id)
      )
      return this.state.showAnswered ? found : !found
    })
    const { showAnswered } = this.state

    return (
      <div >
        <div className='flex-vertical flex-center'>
          <h2>Which question do you want to see?</h2>
          <div className='flex-horizontal'>
            <button className='toggleBtn' disabled={showAnswered} onClick={this.handleToggleFilter}>Answered</button>
            <button className='toggleBtn' disabled={!showAnswered} onClick={this.handleToggleFilter}>Unanswered</button>
          </div>
        </div>
        {
          constQuestionsKeyToRender.map(questionKey => {
            const currQuestion = this.props.questions[questionKey]
            return (
              <QuestionPreview
                id={questionKey}
              />
            )
          })
        }
      </div>
    )
  }

}

function mapStateToProps({ questions, users, auth }, props) {
  return {
    questions,
    users,
    auth
  }
}

export default connect(mapStateToProps)(QuestionList)