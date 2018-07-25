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
    const { users, questions, questionKeys, auth } = this.props
    const { showAnswered } = this.state

    /* Get questions to render based on the option if the users wants to 
       see all answered or unanswered questions. The answered question can 
       be found in the user-object */
    const constQuestionsKeyToRender = questionKeys.filter(questionKey => {
      const found = (
        Object.keys(users[auth.id].answers).includes(questionKey)
      )
      return showAnswered ? found : !found
    })

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
            ? ( /* Render questions if at least 1 has been found. */
              constQuestionsKeyToRender.map(questionKey => {
                const currQuestion = questions[questionKey]
                return (
                  <QuestionPreview id={questionKey} />
                )
              })
            )
            : ( /*  Otherwise show a message */
              <div className='flex-vertical flex-center m-t-2'>
                <h2>No questions found.</h2>
              </div>
            )
        }
      </div>
    )
  }
}

function mapStateToProps({ questions, auth, users }, props) {
  return {
    questionKeys: Object.keys(questions).sort(
      (a, b) =>
        questions[a].timestamp < questions[b].timestamp
    ),
    questions,
    auth,
    users
  }
}

export default connect(mapStateToProps)(QuestionList)