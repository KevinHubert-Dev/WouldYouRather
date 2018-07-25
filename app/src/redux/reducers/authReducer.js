import * as AuthActions from '../actions/authAction'

const authReducer = (state = null, action) => {
  switch (action.type) {
    case AuthActions.SET_AUTHED_USER:
      return action.user
    case AuthActions.UNSET_AUTHED_USER:
      return null
    default:
      return state;
  }
}

export default authReducer