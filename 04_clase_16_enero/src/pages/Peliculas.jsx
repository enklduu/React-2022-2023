import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import getMovieDB from "../helpers/getMovieDB";

const Peliculas = () => {
  const { peliculas } = useLoaderData();
  // console.log(peliculas);
  return peliculas.map((pelicula) => (
    <li key={pelicula.id}>
        <Link to={`/infopeliculas/${pelicula.id}`}>{pelicula.title}</Link>
    </li>
  ));
};

export default Peliculas;
