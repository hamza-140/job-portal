// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCR2CVi8dfkJaNvjpZ0R7emGUL3vVL3vG8",
  authDomain: "jobportal-6baf5.firebaseapp.com",
  projectId: "jobportal-6baf5",
  storageBucket: "jobportal-6baf5.appspot.com",
  messagingSenderId: "243132380110",
  appId: "1:243132380110:web:b852bb05ef3edb8694b19f",
  measurementId: "G-P3X0MRL0QF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
