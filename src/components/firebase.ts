import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6EivMixGv8AOMOtadMdpyH7J3XP0cBWk",
  authDomain: "justrentheavy-ssk.firebaseapp.com",
  projectId: "justrentheavy-ssk",
  storageBucket: "justrentheavy-ssk.firebasestorage.app",
  messagingSenderId: "696909109045",
  appId: "1:696909109045:web:36ce9da19064eb635c5e7c",
  measurementId: "G-NEW9L4RQZX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);