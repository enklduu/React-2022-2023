// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

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

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
