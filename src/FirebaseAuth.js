import React from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const FirebaseAuth = () => {
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJQhtxhKxETZM8kdiawj6V1hWPDYgExxM",
  authDomain: "device-communication.firebaseapp.com",
  projectId: "device-communication",
  storageBucket: "device-communication.appspot.com",
  messagingSenderId: "360598021424",
  appId: "1:360598021424:web:9c62b569d2f23837b494f5",
  measurementId: "G-ZERR3BV5RR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
}
