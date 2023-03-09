import React, { useEffect } from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import getMovieDB from "../helpers/getMovieDB";

// variables globales
const initialStatePelis = [];

const SelectorPelicula = ({ setIdSeleccionado }) => {
  // estados
  const [nombrePelis, setNombrePelis] = useState(initialStatePelis);
  // efectos

  useEffect(() => {
    handleTraerPelis();
  }, []);

  // funcionalidad
  const handleTraerPelis = () => {
    getMovieDB()
      .then((pelis) => {
        setNombrePelis(pelis);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const handleSelect = (e) => {
    e.preventDefault();
    setIdSeleccionado(e.target.value);
  };
  // pintado
  return (
    <Form.Select onChange={handleSelect}>
    <option>Selecciona una opción</option>
    {nombrePelis.map((peli) => (
      <option key={peli.id} value={peli.id}>
        {peli.title}
      </option>
    ))}
  </Form.Select>
  );
};

export default SelectorPelicula;
