import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// importamos el elemento para a cargar mi ruta
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="155620023193-blfjeh2s9ps6e942rurjdam05mluj74d.apps.googleusercontent.com">
    <RouterProvider router={router}/>
  </GoogleOAuthProvider>
);
