const firebase = require('firebase-admin')
const serviceAccount = require('./serviceAccountKey.jsona')

const adminFirebase = firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: 'https://athomeclone.firebaseio.com'
})

module.exports = adminFirebase
