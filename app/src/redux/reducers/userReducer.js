import * as UserActions from '../actions/userActions'
import * as QuestionActions from '../actions/questionsAction'

const userReducer = (state = null, action) => {
  switch (action.type) {
    case UserActions.USERS_LOADED:
      return action.users
    case QuestionActions.QUESTION_ANSWERED:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.questionid]: action.answer
          }
        }
      }
    case QuestionActions.QUESTION_CREATE:
      const updatedUser = {
        [action.question.author]: {
          ...state[action.question.author],
          questions: [...state[action.question.author].questions, action.question.id]
        }
      }
      return {
        ...state,
        ...updatedUser
      }
    default:
      return state;
  }
}

export default userReducer