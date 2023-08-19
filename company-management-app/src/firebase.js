// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database"; // Import getDatabase from the Realtime Database module

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAB-aRGB4iB83-A_QQQL460G8vkCvz-yoA",
  authDomain: "resounding-axe-387816.firebaseapp.com",
  projectId: "resounding-axe-387816",
  storageBucket: "resounding-axe-387816.appspot.com",
  messagingSenderId: "196867829426",
  appId: "1:196867829426:web:a309181c52cefc59f7e3ab",
  measurementId: "G-EKSMXHVXE3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

//Init Database
export const db = getDatabase(app);
