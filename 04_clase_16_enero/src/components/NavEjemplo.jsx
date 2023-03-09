import React from "react";
import { NavLink } from "react-router-dom";

const NavEjemplo = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <NavLink to="/" className={"btn btn-outline-primary"}>
          Home
        </NavLink>
        <NavLink to="/peliculas" className={"btn btn-outline-primary"}>
          Peliculas
        </NavLink>
        <NavLink to="/about" className={"btn btn-outline-primary"}>
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default NavEjemplo;
