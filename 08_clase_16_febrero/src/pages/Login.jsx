import React, { useContext, useEffect } from 'react'
import { LoggedContext } from '../contexts/LoggedContext';
import { UserContext } from '../contexts/UserContext';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { register, handleSubmit } = useForm();

  const logged = useContext(LoggedContext);
  const user = useContext(UserContext);
  const navigate = useNavigate();

  function onSubmit(obj) {
      user.setUser(obj);
      logged.setLogged(true);
      navigate("/precioluz");
  }
  return (
      <>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre</Form.Label>
            <Form.Control {...register("name")} type="text" />
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control {...register("email")} type="text" />
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control {...register("password")} type="password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Guardar
          </Button>
        </Form>
      </>
    );
}

export default Login