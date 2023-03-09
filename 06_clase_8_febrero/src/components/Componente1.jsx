import React, { useContext } from "react";
import { InfoContext } from "../contexts/InfoContext";
import Componente2 from "./Componente2";

function Componente1() {
  const miEdad = useContext(InfoContext);
  return (
    <div>
      <h1>Componente1</h1>
      <h4>Edad: {miEdad.edad} </h4>
      <Componente2 />
    </div>
  );
}

export default Componente1;