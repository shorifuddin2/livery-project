// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDptuzKl-fmwN6mnR-wCtYnx_MS8mrCd70",
  authDomain: "livery-project.firebaseapp.com",
  projectId: "livery-project",
  storageBucket: "livery-project.appspot.com",
  messagingSenderId: "211376641448",
  appId: "1:211376641448:web:1c99669b2d45867470b99d",
  measurementId: "G-GGSV0F023W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);