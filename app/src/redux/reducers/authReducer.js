import * as AuthActions from '../actions/authAction'

const authReducer = (state = null, action) => {
  switch (action.type) {
    case AuthActions.SET_AUTHED_USER:
      return action.user
    default: return state;
  }
}

export default authReducer