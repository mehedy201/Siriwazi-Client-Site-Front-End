// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDttJQrDuMBY5P0v9lC0WuqUmexzhtwiD8",
  authDomain: "siriwazi11.firebaseapp.com",
  projectId: "siriwazi11",
  storageBucket: "siriwazi11.appspot.com",
  messagingSenderId: "917995476402",
  appId: "1:917995476402:web:49fcaf0cb18738d67480ab",
  measurementId: "G-45YTBXDSVX"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {
  analytics,
  auth,
  app
}