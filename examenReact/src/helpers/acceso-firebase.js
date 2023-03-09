import {
  addDoc,
  collection,
  getDocs,
} from "firebase/firestore";
import { db } from "../firebase-config";

export async function guardar(pedido) {
  try {
    const docRef = await addDoc(collection(db, "pagos"), { ...pedido });
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

// export async function getAllPagos() {
//   const data = [];
//   const querySnapshot = await getDocs(collection(db, "pagos"));
//   querySnapshot.forEach((doc) => {
//     data.push({ id: doc.id, data: doc.data() });
//   });
//   console.log(data);
//   return data;
// }