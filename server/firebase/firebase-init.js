const firebase = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.js");

firebase.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://<futureflyer>.firebaseio.com",
});

module.exports = firebase;