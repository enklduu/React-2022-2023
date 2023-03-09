import React from "react";
import { Outlet } from "react-router-dom";
import NavEjemplo from "../components/NavEjemplo";

const LayoutPublico = () => {
  return (
    <>
      <nav> <NavEjemplo/> </nav>
      {/* Donde queramos pintar ponemos Outlet */}
      <main>
        <Outlet></Outlet>
      </main>
      <footer>Footer</footer>
    </>
  );
};

export default LayoutPublico;
