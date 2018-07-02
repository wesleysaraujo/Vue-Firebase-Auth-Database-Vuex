import firebase from 'firebase/app'

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyAO8J9FZw-spKsPLzb3Ks4g8RcV-NIqOhk',
  authDomain: 'fire-vue-auth.firebaseapp.com',
  databaseURL: 'https://fire-vue-auth.firebaseio.com',
  projectId: 'fire-vue-auth',
  storageBucket: 'fire-vue-auth.appspot.com',
  messagingSenderId: '549010239114'
}

const firebaseInit = function () {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebaseInit
