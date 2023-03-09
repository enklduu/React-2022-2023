// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMlI5QmqB2sndWumSquoBRWQ7vMR9HvyQ",
  authDomain: "precioluz-2056d.firebaseapp.com",
  projectId: "precioluz-2056d",
  storageBucket: "precioluz-2056d.appspot.com",
  messagingSenderId: "395194593798",
  appId: "1:395194593798:web:893e411bbfec571260c987"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);