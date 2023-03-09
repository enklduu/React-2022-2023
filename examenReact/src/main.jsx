import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProductosContextProvider } from './contexts/ProductosContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ProductosContextProvider>
  <RouterProvider router={router}/>
  </ProductosContextProvider>
)
