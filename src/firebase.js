// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDi4mmqPuSpYHOqAwyjqElQT9pLpAYHcOw",
    authDomain: "todo-app-4eb03.firebaseapp.com",
    projectId: "todo-app-4eb03",
    storageBucket: "todo-app-4eb03.appspot.com",
    messagingSenderId: "83838354767",
    appId: "1:83838354767:web:6475ad1e6e607c63efb13a",
    measurementId: "G-4GL7149BDP"
});
const db = firebaseApp.firestore();

export default db;
