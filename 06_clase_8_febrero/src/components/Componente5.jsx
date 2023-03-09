import React, { useContext } from "react";
import { InfoContext } from "../contexts/InfoContext";

const Componente5 = () => {
  const edad = useContext(InfoContext);

  // funcionalidad

  const handleAumentarEdad = () => {
    edad.setEdad((prev) => prev + 1);
  };
  return (
    <div>
      <h1>Soy el Componente5</h1>
      <p>Mi Edad: {edad.edad}</p>
      <button onClick={handleAumentarEdad}>+Edad</button>
    </div>
  );
};

export default Componente5;
