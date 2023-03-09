import React, { useContext } from "react";
import { InfoContext } from "../contexts/InfoContext";

const Componente4 = () => {
  const miEdad = useContext(InfoContext);
  return (
    <div>
      <h4>Soy el Componente4</h4>
      <h4>EDAD: {miEdad.edad}</h4>
    </div>
  );
};

export default Componente4;
