//import "firebase/auth"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
//import "firebase/firestore"

// Firebase configuration information
// Replace this with your own configuration for testing 
const firebaseConfig = {
  apiKey: "AIzaSyAxc6O5q590A9g-zuHOQ3eS9atITTakZ30",
  authDomain: "todo-svelte-7f7ac.firebaseapp.com",
  projectId: "todo-svelte-7f7ac",
  storageBucket: "todo-svelte-7f7ac.appspot.com",
  messagingSenderId: "970004772492",
  appId: "1:970004772492:web:d324761172c044f75c6da9",
  measurementId: "G-FKRTJJY5WF"
};


// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const db = app.firestore();

// Export the elements for import by svelte components
export {auth, googleProvider, db}
export default db;