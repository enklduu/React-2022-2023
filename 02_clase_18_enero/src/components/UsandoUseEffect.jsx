// Todos los imports
import React, { useEffect, useState } from 'react'


// Variables globales / initialState

const stateInitialContador1 = 0;
const stateInitialContador2 = 0;

const UsandoUseEffect = () => {

    // console.log("Comienza mi programa");
    // Declaracion de los estados
    const [contador1, setContador1] = useState(stateInitialContador1);
    const [contador2, setContador2] = useState(stateInitialContador2);

    // Declaracion de los efectos
    useEffect(() => {
        console.log("Estoy ejecutando el efecto");
    },[]);

    useEffect(() => {
        console.log("Estoy ejecutando el efecto cuando cambie el contador 1");
    },[contador1]);

    useEffect(() => {
        console.log("Estoy ejecutando el efecto cuando cambie el contador 1 o contador 2");
    },[contador1,contador2]);

    // Lógica de las funciones
    const handleClickContador1 = () => {setContador1((prev)=>prev+1)}
    const handleClickContador2 = () => {setContador2((prev)=>prev+1)}

  return (
    // Pintamos con jsx y componentes
    <div>
        Contador1:{contador1}
        <hr/>
        Contador2:{contador2}
        <hr/>
        Ejemplo del curso de UseEffect y las dependencias:
        <br/>
        <div>
            <button onClick={()=>handleClickContador1()}>Aumentar Contador 1</button><br/><br/>
            <button onClick={()=>handleClickContador2()}>Aumentar Contador 2</button>
        </div>
    </div>
  )
}

export default UsandoUseEffect