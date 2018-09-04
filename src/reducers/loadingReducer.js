import { NOTES_STATUS, USER_STATUS } from '../actionTypes'

export default function (state = {}, action) {
  switch (action.type) {
    case NOTES_STATUS:
      console.log('hiero notes_status in reducer', action)
      return {...state, notes: action.payload}
    case USER_STATUS:
      console.log('hiero user_status in reducer', action)
      return {...state, user: action.payload}
    default:
      return state
  }
}
