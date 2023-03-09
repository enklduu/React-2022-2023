// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Primer paso: instalar firebase con npm
// Segundo paso: instalar bootstrap o materialui
// Crear fichero firebase.config que contenga la firebaseConfig
// Crear en firestore database una nueva base de datos(Colección)


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJwhZjZwIymFxtAKs3yKVl_iPJWYYiE_A",
  authDomain: "examenreact-3d120.firebaseapp.com",
  projectId: "examenreact-3d120",
  storageBucket: "examenreact-3d120.appspot.com",
  messagingSenderId: "481360592574",
  appId: "1:481360592574:web:314469edaddabba72e68ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
