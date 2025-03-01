// firebase.js
import firebase from 'firebase/app';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAU2-Kzs9dRkUgUQRsDWrLk0ncaZY9ud8o",
    authDomain: "funn-project.firebaseapp.com",
    databaseURL: "https://funn-project-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "funn-project",
    storageBucket: "funn-project.firebasestorage.app",
    messagingSenderId: "1065347560436",
    appId: "1:1065347560436:web:211b9537d1fd2fd11d7fa1",
    measurementId: "G-CQCFKF6BQY"
  };

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { db };
