// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId
  apiKey: "AIzaSyDFAeRZjDk-Ou-Y6lfOShER6We4h54EsdQ",
  // apiKey: process.env.REACT_APP_apiKey,
  authDomain: "doctors-portal-af6c8.firebaseapp.com",
  projectId: "doctors-portal-af6c8",
  storageBucket: "doctors-portal-af6c8.appspot.com",
  messagingSenderId: "604361823943",
  appId: "1:604361823943:web:e4f70367b0ca7e99da10e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

// REACT_APP_apiKey=AIzaSyDFAeRZjDk-Ou-Y6lfOShER6We4h54EsdQ,
// REACT_APP_authDomain=doctors-portal-af6c8.firebaseapp.com,
// REACT_APP_projectId=doctors-portal-af6c8,
// REACT_APP_storageBucket=doctors-portal-af6c8.appspot.com,
// REACT_APP_messagingSenderId=604361823943,
// REACT_APP_appId=1:604361823943:web:e4f70367b0ca7e99da10e2
