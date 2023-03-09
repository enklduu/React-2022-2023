import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
 

// importamos el elemento para a cargar mi ruta
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
