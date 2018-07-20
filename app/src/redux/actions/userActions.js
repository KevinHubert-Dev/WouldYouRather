export const USERS_LOADED = 'USERS_LOADED'

export function usersLoaded(users) {
  console.log("usersLoaded called")
  return {
    type: USERS_LOADED,
    users
  }
}