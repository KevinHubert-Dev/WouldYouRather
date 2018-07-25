export const USERS_LOADED = 'USERS_LOADED'

export function usersLoaded(users) {
  return {
    type: USERS_LOADED,
    users
  }
}