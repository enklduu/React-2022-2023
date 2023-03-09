import { createBrowserRouter } from "react-router-dom";
import getMovieDB from "../helpers/getMovieDB";
import getInfoPelicula from "../helpers/getInfoPelicula";
import LayoutPublico from "../Layout/LayoutPublico";
import About from "../pages/About";
import Error from "../pages/Error";
import Home from "../pages/Home";
import InfoPelicula from "../pages/InfoPelicula";
import Peliculas from "../pages/Peliculas";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublico />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "/peliculas", element: <Peliculas />, loader: getMovieDB },
      { path: "/about", element: <About /> },
      { path: "/infopelicula", element: <InfoPelicula /> },
      {
        path: "/infopeliculas/:id",
        element: <InfoPelicula />,
        loader: ({ params }) => getInfoPelicula(params.id),
      },
    ],
  },
]);
