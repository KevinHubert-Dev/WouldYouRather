import * as QuestionsAction from '../actions/questionsAction'

const questionReducer = (state = {}, action) => {
  switch (action.type) {
    case QuestionsAction.QUESTIONS_LOADED:
      return action.questions
    case QuestionsAction.QUESTION_CREATE:
      return { ...state, [action.question.id]: action.question }
    case QuestionsAction.QUESTION_ANSWERED:
      return {
        ...state,
        [action.questionid]: {
          [action.answer]: [
            ...state[action.questionid][action.answer].votes,
            action.authedUser
          ]
        }
      }
    default: return state;
  }
}

export default questionReducer