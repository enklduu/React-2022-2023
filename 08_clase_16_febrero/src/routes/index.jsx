import { createBrowserRouter } from "react-router-dom";
import getPrecioLuz from "../helpers/getPrecioLuz";
import Layout from "../Layout/Layout";
import Login from "../pages/Login";
import Error from "../pages/Error";
import Home from "../pages/Home";
import PrecioLuz from "../pages/PrecioLuz";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { index:true ,element:<Home/>},
      { path: "/home", element: <Home />},
      { path: "/login", element: <Login />},
      { path: "/precioluz", element: <PrecioLuz/>,loader: async () => {
        return getPrecioLuz();
      },},
    ],
  },
]);