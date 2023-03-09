import React, { useState } from "react";

// Si el valor inicial es algo se declara fuera para que el ámbito sea todo

const userIni = [
  { id: 1, nombre: "Pedro", edad: 10, img: "urlImagen" },
  { id: 2, nombre: "Mario", edad: 20, img: "urlImagen" },
  { id: 3, nombre: "Maria", edad: 30, img: "urlImagen" },
  { id: 4, nombre: "Martina", edad: 40, img: "urlImagen" },
];

const Usuario = () => {
  const [user, setUser] = useState(userIni);

  // Copiar objeto y modificar el copiado

  const handlerInsertar = () => {
    const newObjeto = [...userIni];
    const persona = {
      id: 5,
      nombre: "Cristofer",
      edad: 60,
      img: "urlImagen",
    };
    newObjeto.unshift(persona);
    setUser(newObjeto);
  };

  // Pintado

  return (
    <>
      {user.map((usuario) => {
        return (
          <div key={usuario.id}>
              Nombre : {usuario.nombre}
              <br />
              Edad : {usuario.edad}
              <br />
              Imagen :
          </div>
        );
      })}
      <div>
      <button onClick={() => handlerInsertar()}>Insertar Usuario</button>
      </div>
    </>
  );
};

export default Usuario;
