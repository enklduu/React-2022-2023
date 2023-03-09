import React from 'react'
import Producto from './Producto';

const Productos = ({products}) => {
  // console.log(products);
  
  return products.map((product) => {
    return (
      <Producto  product={product} key={product.id}/>
    );
  });
}

export default Productos