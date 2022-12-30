// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCx93JF-RPXGw_l7UtD0vwTeCnv2X-hSbc",
  authDomain: "siriwaziclient.firebaseapp.com",
  projectId: "siriwaziclient",
  storageBucket: "siriwaziclient.appspot.com",
  messagingSenderId: "892406705792",
  appId: "1:892406705792:web:004c7a6ad4837529c24065",
  measurementId: "G-JEYFXJ8VZM"
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