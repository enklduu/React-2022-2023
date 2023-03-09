import React , { useState } from "react";

function Contador() {
    
    // States
    const [texto, setTexto] = useState(true);
    const [contador, setContador] = useState(0);


    const handlerIncrementar = () =>  {
        setContador((prev)=>prev+1);
    }
    const handlerDecrementar = () =>  {
        setContador((prev)=>prev-1);
    }

    const handlerChange = () => {
        setTexto(!texto);
    }
  return (
    <>
      <h1>{contador}</h1>
      <button onClick={() => handlerIncrementar()}>Incrementar</button>
      <button onClick={() => handlerDecrementar()}>Decrementar</button>
      <button onClick={() => handlerChange()}>Cambiar</button>
      {
        texto && <h1>Ok</h1>
      }
    </>
  );
}

export default Contador;
