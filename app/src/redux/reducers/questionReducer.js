import * as QuestionsAction from '../actions/questionsAction'

const questionReducer = (state = [], action) => {
  switch (action.type) {
    case QuestionsAction.QUESTIONS_LOADED:
      return action.questions
    default: return state;
  }
}

export default questionReducer