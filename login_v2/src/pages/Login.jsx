import React, { useState } from 'react'
import { useOutletContext } from 'react-router-dom';
import Formulario from "../components/Formulario";


const Login = () => {
  const [log, setLog] = useOutletContext();

  return (
    <Formulario log={log} setLog={setLog}/>
  )
}

export default Login