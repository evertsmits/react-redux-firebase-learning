import {GET_NOTES} from '../actionTypes'

export default function notesReducer (state = [], action) {
  switch (action.type) {
    case GET_NOTES:
      return action.payload
    default:
      return state
  }
}
