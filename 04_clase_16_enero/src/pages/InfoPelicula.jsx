import React from 'react'
import { Link, useLoaderData } from 'react-router-dom';
import getinfoPelicula from '../helpers/getInfoPelicula'

const InfoPelicula = () => {
  const infoPelicula = useLoaderData();
  // console.log(infoPelicula);
  return (
    <div className="container">
      <div className="card m-auto" style={{ width: "23rem" }}>
        <img
          className="card-img-top"
          src={`https://image.tmdb.org/t/p/original/${infoPelicula.data.poster_path}`}
          alt="Card image cap"
        />
        <div className="card-body">
          <div className="card-title">{infoPelicula.data.title}</div>
          <div className="card-subtitle text-muted">
            {infoPelicula.data.tagline}
            {infoPelicula.data.overview}
          </div>
        </div>
        <Link to={"/peliculas"} className="text-center mb-4">
          Volver a peliculas
        </Link>
      </div>
    </div>
  );
};

export default InfoPelicula