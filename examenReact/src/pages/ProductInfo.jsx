import React from 'react'
import { Link, useLoaderData } from 'react-router-dom';

const ProductInfo = () => {
  const data = useLoaderData();
  return (
    <div className="container">
      <div className="card m-auto" style={{ width: "23rem" }}>
        <img
          className="card-img-top"
          src={data.data.image}
          alt="Card image"
        />
        <div className="card-body">
          <div className="card-title">{data.data.title}</div>
          <div className="card-subtitle text-muted">
            {data.data.description}
          </div>
        </div>
        <Link to={"/"} className="text-center mb-4">
          Volver a la vista principal
        </Link>
      </div>
    </div>
  )
}

export default ProductInfo