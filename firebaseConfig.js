// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCItmq5q_iezYzMcjGK97DVinWXO2JD2_Y",
  authDomain: "portfolio-3cc8e.firebaseapp.com",
  projectId: "portfolio-3cc8e",
  storageBucket: "portfolio-3cc8e.appspot.com",
  messagingSenderId: "299540114623",
  appId: "1:299540114623:web:58b70593daebfdc83c6a0a",
  measurementId: "G-KMQKDNWLN3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);