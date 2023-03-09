import React, { useContext } from 'react'
import { LoginContext } from '../contexts/LoginContext';
import { PersonContext } from '../contexts/NewContext';
import Componente4 from './Componente4'

const Componente3 = () => {
    const persona = useContext(PersonContext);
    const log = useContext(LoginContext);
  return (
    <div>
    <h3>Soy el Componente3</h3>
    <p>DNI - {persona.usuario.dni}</p>
    <p>Nombre - {persona.usuario.nombre}</p>
    <p>Edad - {persona.usuario.edad}</p>
    <p>Logged - {log.logged?"Yes":"No"}</p>
    <Componente4 />
  </div>
  )
}

export default Componente3