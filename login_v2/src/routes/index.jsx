import { useState } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Login from "../pages/Login";



export const router = createBrowserRouter(
  [
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { index:true ,element:<Home/>},
      { path: "/login", element: <Login/> },
    ],
  },
]);