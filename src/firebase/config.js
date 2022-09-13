// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Frebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjf6tL5KNsuOjnL24GAkIFcLQJlA7xyvI",
  authDomain: "journal-app-e619a.firebaseapp.com",
  projectId: "journal-app-e619a",
  storageBucket: "journal-app-e619a.appspot.com",
  messagingSenderId: "706706612986",
  appId: "1:706706612986:web:54b19bf8d2e17c52b51f43"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth( FirebaseApp );

export const FiresbaseDB = getFirestore( FirebaseApp );
