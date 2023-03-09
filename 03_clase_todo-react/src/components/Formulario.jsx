/* eslint-disable no-throw-literal */
import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// Variables
const url = "http://localhost:4500/tasks/";

const Formulario = () => {
  // Funciones
  const handleSendTask = async (e) => {
    e.preventDefault();

    const $taskName = document.querySelector(".taskname");
    const $importanceTarea = document.querySelector(".importance");

    const nuevaTarea = {
      task: $taskName.value,
      importance: $importanceTarea.value,
    };
    console.log(nuevaTarea);
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(nuevaTarea),
      };

      const enlace = await fetch(url, options);
      await enlace.json();

      if (enlace.ok) {
        console.log("Se ha añadido una nueva tarea");
      } else
        throw {
          status: enlace.status,
          statusText: enlace.statusText,
        };
      document.querySelector(".taskname").value = "";
      document.querySelector(".importance").value = 1;
    } catch (error) {
      console.error(error.statusText);
    }
  };

  const handleModifyTask = async (e) => {
    e.preventDefault();
    try {
      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
          task: document.querySelector(".taskname").value,
          importance: document.querySelector(".importance").value,
        }),
      };

      const urlModificar = url + e.target.dataset.id;
      const enlace = await fetch(urlModificar, options);

      await enlace.json();
      if (!enlace.ok)
        throw { status: enlace.status, message: enlace.statusText };

      document
        .querySelector(".modify")
        .setAttribute("class", "modify d-none btn btn-primary");

      document
        .querySelector(".send")
        .setAttribute("class", "send d-inline btn btn-primary");

      document.querySelector(".taskname").value = "";
      document.querySelector(".importance").value = 1;
    } catch (error) {
      const miError = error.statusText || "Error al cargar los datos";
      console.log(miError);
    }
  };

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formInput">
          <Form.Label>Tarea</Form.Label>
          <Form.Control
            className="taskname"
            type="text"
            placeholder="Introduzca su tarea"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
          <Form.Label>importance de la Tarea</Form.Label>
          <Form.Control as="select" className="importance">
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </Form.Control>
        </Form.Group>
        <Button
          className="send d-inline btn btn-primary"
          type="submit"
          onClick={(e) => handleSendTask(e)}
        >
          Enviar tarea
        </Button>
        <Button
          className="modify d-none btn-primary"
          type="submit"
          onClick={(e) => handleModifyTask(e)}
        >
          Modificar tarea
        </Button>
      </Form>
    </div>
  );
};

export default Formulario;
