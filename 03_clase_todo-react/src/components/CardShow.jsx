/* eslint-disable no-throw-literal */
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import getJSON from "../helpers/getJSON";

// Variables
const initialStateTasks = [];
const url = "http://localhost:4500/tasks/";

const CardShow = () => {
  // Estados
  const [tasks, setTasks] = useState(initialStateTasks);
  // Efectos
  useEffect(() => {
    traerJSON();
  }, [tasks]);
  // Así carga bucle infinito en la consola que ejecutemos el server-json en contraparte no hay que recagar para que se ejecuten los cambios

  // Funciones
  const traerJSON = () => {
    getJSON()
      .then((json) => setTasks(json))
      .catch((error) => console.error(error));
  };

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      const options = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      };
      const urlDelete = url + e.target.dataset.id;
      const response = await fetch(urlDelete, options);

      await response.json();

      if (!response.ok)
        throw { status: response.status, message: response.statusText };

      localStorage.setItem(
        e.target.dataset.task,
        "Importancia: " + e.target.dataset.importance
      );
    } catch (error) {
      const myError = error.statusText || "Error al cargar los datos";
      console.log(myError);
    }
  };

  const handleChangeForm = (e) => {
    e.preventDefault();

    document.querySelector(".taskname").value = e.target.dataset.task;
    document.querySelector(".importance").value = e.target.dataset.importance;

    document
      .querySelector(".modify")
      .setAttribute("class", "modify d-inline btn btn-primary");
    document
      .querySelector(".modify")
      .setAttribute("data-id", e.target.dataset.id);
    document
      .querySelector(".send")
      .setAttribute("class", "send d-none btn btn-primary");
  };

  return tasks.reverse().map((task) => {
    return (
      <Card style={{ width: "18rem" }} className="m-4 d-flex" key={task.id}>
        <Card.Header>{task.task}</Card.Header>
        <Card.Body>
          <Card.Subtitle>Importancia: {task.importance}</Card.Subtitle>
        </Card.Body>
        <Card.Body className="d-flex flex-column">
          <Button
            data-id={task.id}
            data-task={task.task}
            data-importance={task.importance}
            className="mb-2"
            onClick={(e) => handleChangeForm(e)}
          >
            Modificar tarea
          </Button>
          <Button
            data-id={task.id}
            data-task={task.task}
            data-importance={task.importance}
            onClick={(e) => handleDelete(e)}
          >
            Eliminar tarea
          </Button>
        </Card.Body>
      </Card>
    );
  });
};

export default CardShow;
