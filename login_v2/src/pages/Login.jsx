import React, { useState } from 'react'
import Formulario from "../components/Formulario";


const Login = () => {

  const [userData, setUserData] = useState({});

  return (
    <Formulario userData={userData} setUserData={setUserData}/>
  )
}

export default Login