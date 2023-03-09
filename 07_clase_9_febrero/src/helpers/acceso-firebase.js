import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase.config";

export async function guardar(pieza) {
  try {
    const docRef = await addDoc(collection(db, "productos"), { ...pieza });
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function getAll() {
  const data = [];
  const querySnapshot = await getDocs(collection(db, "productos"));
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, data: doc.data() });
  });
  console.log(data);
  return data;
}

export async function borrarPieza(id) {
  await deleteDoc(doc(db, "productos", id));
}

export async function editarPieza(pieza) {
  const docRef = doc(db, "productos", pieza.id);
  await updateDoc(docRef, { ...pieza.data });
}
