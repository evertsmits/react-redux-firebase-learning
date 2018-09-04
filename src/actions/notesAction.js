import { GET_NOTES, NOTES_STATUS } from '../actionTypes'
import { database } from '../firebase'

export function getNotes () {
  return dispatch => {
    // as soon as this function fires show loading true
    dispatch({
      type: NOTES_STATUS,
      payload: true
    })
    database.on('value', (snapshot) => {
      dispatch({
        type: GET_NOTES,
        payload: snapshot.val()
      })
      // once notes are received show loading false
      dispatch({
        type: NOTES_STATUS,
        payload: false
      })
    }, () => {
      dispatch({
        type: NOTES_STATUS,
        payload: -1
      })
    })
  }
}

export function saveNote (note) {
  return dispatch => database.push(note)
}

export function deleteNote (id) {
  return dispatch => database.child(id).remove()
}

export function saveComment (noteId, comment) {
  // I LOVE FIREBASE.. easy comments onder een note hangen met child method.
  // Als er al een comment bestaat dan pusht ie em en zo niet dan maakt ie de ref comments en dan push
  return dispatch => database.child(noteId).child('comments').push(comment)
}

export function editNote (id, note) {
  return dispatch => database.child(id).update(note)
}
