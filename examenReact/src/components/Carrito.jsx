import React, { useContext } from "react";
import { ProductosContext } from "../contexts/ProductosContext";
import { guardar } from "../helpers/acceso-firebase";

const Carrito = () => {
  const misProductos = useContext(ProductosContext);

  async function handleSubmit() {
    //añadir en firebase
    misProductos.productos.forEach(element => {
      // console.log(element);
    });
    // No se mandar un timeStamp :(
    const objId = await guardar(misProductos.productos);
  };

  // console.log(misProductos.productos);
  // Tengo que confesar que he mirado ejercicios del año pasado para esta parte
  let total = misProductos.productos.reduce(
    (acumulador, actual) => acumulador + actual.price,
    0
  );
  return (
    <>
      <div>Productos: 🛒 </div>
      {misProductos.productos.map((producto) => (
        <li key={producto.id}>
          {producto.title} - {producto.price}€
        </li>
      ))}
      <div>Total - {total}€</div>
      <button onClick={() => handleSubmit()}>Pagar</button>
    </>
  );
};

export default Carrito;
