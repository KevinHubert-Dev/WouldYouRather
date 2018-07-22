import * as API from '../../utils/_DATA'
import { showLoading, hideLoading } from 'react-redux-loading'

export const QUESTIONS_LOADED = 'QUESTIONS_LOADED'
export const QUESTION_ANSWERED = 'QUESTION_ANSWERED'
export const QUESTION_CREATE = 'QUESTION_CREATE'


export function questionsLoaded(questions) {
  return {
    type: QUESTIONS_LOADED,
    questions
  }
}

export function questionAnswered(authedUser, questionid, answer) {
  console.log("a")
  return {
    type: QUESTION_ANSWERED,
    questionid,
    authedUser,
    answer
  }
}

/*
 * answer-param can be 'optionOne' or 'optionTwo'
 */
export function handleQuestionAnswer(authedUser, questionid, answer) {
  return dispatch => {
    dispatch(showLoading)
    API._saveQuestionAnswer({ authedUser, qid: questionid, answer })
      .then(() => {
        dispatch(questionAnswered(authedUser, questionid, answer))
        dispatch(hideLoading())
      })
  }
}

export function handleQuestionCreate(optionOneText, optionTwoText, author) {
  return dispatch => {
    const question = { optionOneText, optionTwoText, author }
    dispatch(showLoading())

    API._saveQuestion(question)
      .then(createdQuestion => {
        dispatch(questionCreate(createdQuestion))
        dispatch(hideLoading())
      })
  }
}

function questionCreate(question) {
  return {
    type: QUESTION_CREATE,
    question
  }
}