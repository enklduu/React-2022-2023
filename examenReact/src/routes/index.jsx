import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Error from "../pages/Error";
import getData from "../helpers/getData";
import getProduct from "../helpers/getProduct";
import ProductInfo from "../pages/ProductInfo";
import Main from "../pages/Main";
import Producto from "../components/Producto"
import Productos from "../components/Productos"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Main />, loader: getData },
      {
        path: "/:id",
        element: <ProductInfo />,
        loader: ({ params }) => getProduct(params.id) ,
      },
      // {
      //   path:'/*' ,element: <Navigate to='/'/>,
      // },
    ],
  },
]);
