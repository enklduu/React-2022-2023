import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import { Navigate } from "react-router-dom";

const Formulario = ({log , setLog}) => {
  return (
    <>
    {log && (
      <Navigate to="/" replace={true} />
    )}
    <GoogleLogin
      clientId="155620023193-blfjeh2s9ps6e942rurjdam05mluj74d.apps.googleusercontent.com"
      onSuccess={(credentialResponse) => {
        if (credentialResponse.credential != null) {
          const USER_CREDENTIAL = jwtDecode(credentialResponse.credential);
          localStorage.setItem('user', JSON.stringify(USER_CREDENTIAL));
          // return (<Navigate to="/" />);
          // return redirect("/");
          setLog(true);
        }
      }}
      onError={() => {
        console.log("Login Failed");
      }}
      cookiePolicy={"single_host_origin"}
    />
    </>
  );
};

export default Formulario;
