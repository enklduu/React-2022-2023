/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import getinfoPelicula from "../helpers/getInfoPelicula";

// variables globales
const initialStatePeli = {};

const Pelicula = ({ idSeleccionado, setIdSeleccionado }) => {
  // estados
  const [peli, setPeli] = useState(initialStatePeli);

  // efectos
  useEffect(() => {
    handleTraerPeli();
  }, [idSeleccionado]);

  // funcionalidad
  const handleTraerPeli = () => {
    getinfoPelicula(idSeleccionado)
      .then((peli) => {
        setPeli(peli);
      })
      .catch((err) => {
        console.error(err);
      });
      setIdSeleccionado=false;
  };
  // pintado

  return (
    <Card
      className="text-center mb-4"
      border="secondary"
      style={{ width: "28rem" }}
    >
      <Card.Img
        className="mx-auto mt-3"
        src={`https://image.tmdb.org/t/p/original/${peli.poster_path}`}
        alt={peli.title}
        style={{ width: "60%" }}
      />

      <Card.Body className="mx-3">
        <Card.Title>{peli.title}</Card.Title>
        <Card.Text className="mb-2 text-muted">{peli.overview}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Pelicula;
