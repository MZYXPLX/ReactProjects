// Import the functions you need from the SDKs you need
// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// ... rest of the code
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5T85FG6ua0259_NmTE9EXwiZRjas0oFs",
  authDomain: "jobboard-389b0.firebaseapp.com",
  projectId: "jobboard-389b0",
  storageBucket: "jobboard-389b0.appspot.com",
  messagingSenderId: "969958189563",
  appId: "1:969958189563:web:d0c34cf6ad6a090156435e",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { auth };
