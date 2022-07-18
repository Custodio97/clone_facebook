import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
const firebaseConfig = {
    apiKey: "AIzaSyCz5H0-oSPI6S506_J7D7KD5R06sFfXl6M",
    authDomain: "facebook-51edf.firebaseapp.com",
    projectId: "facebook-51edf",
    storageBucket: "facebook-51edf.appspot.com",
    messagingSenderId: "971682444672",
    appId: "1:971682444672:web:d70dbbf4afc5ac64093d65",
    measurementId: "G-G7S35F0VD0"
};
const app = firebase.initializeApp(firebaseConfig)
const db = app.firestore() 
const storege = firebase.storage()

export {db,storege}