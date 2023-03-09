import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Navigate, useOutletContext } from "react-router-dom";

const Home = () => {

  const [log, setLog] = useOutletContext();

  const handleClick = () => {
    localStorage.removeItem("user");
    setLog(false);
    return (<Navigate to="/login"/>);
  };

  return (
    <>
    {!log && (
      <Navigate to="/login" replace={true} />
    )}
      {localStorage.getItem("user") ? (
        <>
          {/* {console.log(JSON.parse(localStorage.getItem("user")))} */}
          <div>Hola {JSON.parse(localStorage.getItem("user")).email}</div>
          <button onClick={handleClick}>Cerrar Sesión</button>
          {/* <a href="/login"><p>Logout</p></a> */}
        </>
      ) : (
        <a href="/login">
          <p>Logeate</p>
        </a>
      )}
    </>
  );
};

export default Home;