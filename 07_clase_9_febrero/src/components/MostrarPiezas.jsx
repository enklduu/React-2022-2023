import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { borrarPieza } from "../helpers/acceso-firebase";

function MostrarPiezas({ statePieza, stateEdit }) {
  async function handleBorrar(id) {
    statePieza.setPieza(statePieza.pieza.filter((item) => item.id != id));
    await borrarPieza(id);
  }

  let renderPieza = [];
  renderPieza = statePieza.pieza.map((item) => (
    <Card key={item.id} style={{ width: "18rem" }}>
      <Card.Header>
        <Button onClick={() => stateEdit.setEdit(item)} className="btn-primary">
          Editar
        </Button>
        <Button
          onClick={() => handleBorrar(item.id)}
          className="btn-primary ms-2"
        >
          Borrar
        </Button>
      </Card.Header>
      <Card.Body>
        <Card.Title>{item.data.nombre}</Card.Title>
        <Card.Text className="pieza-price">
          Precio: {item.data.precio}
        </Card.Text>
        <Card.Text className="pieza-valoracion">
          Valoracion: {item.data.valoracion}
        </Card.Text>
      </Card.Body>
    </Card>
  ));
  // Debe ser al revés
  renderPieza.reverse();

  return <>{renderPieza}</>;
}

export default MostrarPiezas;
