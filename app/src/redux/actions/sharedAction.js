import * as API from '../../utils/_DATA'

import * as QuestionActions from './questionsAction'
import * as UserActions from './userActions'

import { showLoading, hideLoading } from 'react-redux-loading'

export function handleLoadInitialData() {
  return dispatch => {
    dispatch(showLoading())
    API.getInitialData()
      .then(({users, questions}) => {
        dispatch(QuestionActions.questionsLoaded(questions))
        dispatch(UserActions.usersLoaded(users))
        dispatch(hideLoading())
      })
  }
}