import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { UserContextProvider } from "./contexts/UserContext";
import { LoggedContextProvider } from "./contexts/LoggedContext";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserContextProvider>
    <LoggedContextProvider>
      <RouterProvider router={router} />
    </LoggedContextProvider>
  </UserContextProvider>
);
