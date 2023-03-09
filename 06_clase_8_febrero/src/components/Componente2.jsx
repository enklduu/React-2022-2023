import React, { useContext } from "react";
import Componente3 from "./Componente3";
import { InfoContext } from "../contexts/InfoContext";
import { LoginContext } from "../contexts/LoginContext";

const Componente2 = () => {
  const edad = useContext(InfoContext);
  
  const log = useContext(LoginContext);
  // funcionalidad

  const handleDecrementarEdad = () => {
    edad.setEdad((prev) => prev - 1);
  };
  const handleLog = () => {
    if (log.logged) {
      log.setLogged(false);
    } else {
      log.setLogged(true);
    }
  };

  return (
    <div>
      <h2>Soy el Componente2</h2>
      <button onClick={handleDecrementarEdad}>-Edad</button>
      <button onClick={handleLog}>Log</button>
      <Componente3 />
    </div>
  );
};

export default Componente2;
