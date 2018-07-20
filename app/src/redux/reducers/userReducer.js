import * as UserActions from '../actions/userActions'

const userReducer = (state = [], action) => {
  switch (action.type) {
    case UserActions.USERS_LOADED: 
      return action.users
    default: return state;
  }
}

export default userReducer