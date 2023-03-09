import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import getUsers from "../helpers/getUsers";

// variables globales

const initialStateUsuarios = [];

const DatosApi = () => {
  //estados
  const [usuarios, setUsuarios] = useState(initialStateUsuarios);

  //efectos
  useEffect(() => {
    traerUsuarios();
  }, []);

  // Funciones
  /**
   * Función que gracias al helper de getUser me devuelve los usuarios de la Api reqrest.in
   */
  const traerUsuarios = () => {
    getUsers()
      .then((users) => {
        setUsuarios(users);
        console.log("Data Traida de data.data", users);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="mx-5 mt-5 d-flex flex-wrap">
      {usuarios.map((usuario) => {
        return (
          <Card
            className="text-center mb-4"
            border="primary"
            style={{ width: "18rem" }}
            key={usuario.id}
          >
            <Card.Img className="mx-auto mt-3" src={usuario.avatar} alt={usuario.firstName} style={{borderRadius:"50%", width:"70%" }}/>

            <Card.Body>
              <Card.Title>{`Usuario: ${usuario.firstName} ${usuario.lastName}`}</Card.Title>
              <Card.Subtitle>{`Email: ${usuario.email}`}</Card.Subtitle>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default DatosApi;
