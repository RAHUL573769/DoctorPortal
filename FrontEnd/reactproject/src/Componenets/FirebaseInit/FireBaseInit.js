// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFAeRZjDk-Ou-Y6lfOShER6We4h54EsdQ",
  authDomain: "doctors-portal-af6c8.firebaseapp.com",
  projectId: "doctors-portal-af6c8",
  storageBucket: "doctors-portal-af6c8.appspot.com",
  messagingSenderId: "604361823943",
  appId: "1:604361823943:web:e4f70367b0ca7e99da10e2"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;