import * as firebase from 'firebase'

//CONFIG IS MISSING OFCOURSE ;) FOR SAFETY REASONS

// Deze regel fixed een nieuwe table als het ware in de firebase database genaamd notes
export const database = firebase.database().ref('/notes')
export const auth = firebase.auth()
export const googleProvider = new firebase.auth.GoogleAuthProvider()
