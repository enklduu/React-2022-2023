// Primer paso: instalar firebase con npm
// Segundo paso: instalar bootstrap o materialui
// Crear fichero firebase.config que contenga la firebaseConfig
// Crear en firestore database una nueva base de datos(Colección)

// Lo que tenemos que hacer es un console.log que muestre que has introducido un campo en mi firestore database

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCd4wsFi1HMVzSKSNjWKbeHMfksBChzrB8",
  authDomain: "tienda-53670.firebaseapp.com",
  projectId: "tienda-53670",
  storageBucket: "tienda-53670.appspot.com",
  messagingSenderId: "965348741086",
  appId: "1:965348741086:web:d7e3584a544191a547174f"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
