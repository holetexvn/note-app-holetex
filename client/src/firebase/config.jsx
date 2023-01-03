// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSfxUao1BwpmVpPvu7f4LpQJhLvrxIzcU",
  authDomain: "note-app-holetex.firebaseapp.com",
  projectId: "note-app-holetex",
  storageBucket: "note-app-holetex.appspot.com",
  messagingSenderId: "607239612804",
  appId: "1:607239612804:web:5d0bedba10ffc2a84bd5d1",
  measurementId: "G-DLSHCKNQ65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);