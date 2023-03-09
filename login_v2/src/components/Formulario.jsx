import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import { Card, Image, Button } from "react-bootstrap";
import { Link } from 'react-router-dom'

const Formulario = ({ userData, setUserData }) => {

  return (
    <GoogleLogin
    // clientId="155620023193-blfjeh2s9ps6e942rurjdam05mluj74d.apps.googleusercontent.com"
    onSuccess={(credentialResponse) => {
      if (credentialResponse.credential != null) {
        const USER_CREDENTIAL = jwtDecode(credentialResponse.credential);
        console.log(USER_CREDENTIAL);
        setUserData(USER_CREDENTIAL);
      }
    }}
    onError={() => {
      console.log("Login Failed");
    }}
    // cookiePolicy={'single_host_origin'}
  />
  //   <Card>
  //     <Card.Header>
  //       <Image src={userData.photoURL} roundedCircle />
  //     </Card.Header>
  //     <Card.Body>
  //       <Card.Title>{userData.displayName}</Card.Title>
  //       <Card.Text>{userData.email}</Card.Text>
  //       {/* <Button href={userData.providerData[0].profile}>Ver perfil</Button> */}
  //       <Link to={"/login"}>Cerrar Sesión</Link>
  //     </Card.Body>
  //   </Card>
  );
};

export default Formulario;
