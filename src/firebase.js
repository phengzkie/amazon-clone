import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCgX2yC6q5D_P2QgH919BxvRJ-W-I94QkQ",
  authDomain: "clone-9d72f.firebaseapp.com",
  databaseURL: "https://clone-9d72f.firebaseio.com",
  projectId: "clone-9d72f",
  storageBucket: "clone-9d72f.appspot.com",
  messagingSenderId: "251096949372",
  appId: "1:251096949372:web:7cebd71e4391a550a59ff9",
  measurementId: "G-5P8763HYZ1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };