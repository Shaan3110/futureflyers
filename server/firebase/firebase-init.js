require('dotenv').config()
const firebase = require("firebase-admin");

firebase.initializeApp({
  credential: firebase.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL, 
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n') 
}),
  databaseURL: process.env.FIREBASE_DATABASE_URL,
});

module.exports = firebase;