import React, { Component } from 'react'
import { connect } from 'react-redux'

import QuestionPreview from './QuestionPreview'


class QuestionList extends Component {

  state = {
    showAnswered: false
  }

  handleToggleFilter = (event) => {
    event.preventDefault()

    this.setState(currState => {
      return { showAnswered: !currState.showAnswered }
    })
  }

  render() {
    const { questions, questionKeys, auth } = this.props

    const constQuestionsKeyToRender = questionKeys.filter(questionKey => {
      const found = (
        questions[questionKey].optionOne.votes.includes(auth.id) ||
        questions[questionKey].optionTwo.votes.includes(auth.id)
      )
      return this.state.showAnswered ? found : !found
    })
    const { showAnswered } = this.state

    return (
      <div >
        <div className='flex-vertical flex-center'>
          <h2>Which question do you want to see?</h2>
          <div className='flex-horizontal'>
            <button className='toggleBtn' disabled={!showAnswered} onClick={this.handleToggleFilter}>Unanswered</button>
            <button className='toggleBtn' disabled={showAnswered} onClick={this.handleToggleFilter}>Answered</button>
          </div>
        </div>
        {
          constQuestionsKeyToRender.length > 0
            ? (
              constQuestionsKeyToRender.map(questionKey => {
                const currQuestion = this.props.questions[questionKey]
                return (
                  <QuestionPreview id={questionKey} />
                )
              })
            )
            : (
              <div className='flex-vertical flex-center m-t-2'>
                <h2>No questions found.</h2>
              </div>
            )
        }
      </div>
    )
  }

}

function mapStateToProps({ questions, auth }, props) {
  return {
    questionKeys: Object.keys(questions).sort(
      (a, b) =>
        questions[a].timestamp < questions[b].timestamp
    ),
    questions,
    auth
  }
}

export default connect(mapStateToProps)(QuestionList)