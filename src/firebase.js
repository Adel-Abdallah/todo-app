import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAT3nlgUM4UK_NTDCtCx7lyELsTv0uE88M",
  authDomain: "todo-app-406d6.firebaseapp.com",
  projectId: "todo-app-406d6",
  storageBucket: "todo-app-406d6.appspot.com",
  messagingSenderId: "717850869376",
  appId: "1:717850869376:web:a420eefac9f563414db065"
});

const db = firebaseApp.firestore();

export default db;
