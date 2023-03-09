import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { editarPieza, guardar } from "../helpers/acceso-firebase";

const GuardarPiezas = ({ statePieza, stateEdit }) => {
  const { register, handleSubmit, setValue, reset } = useForm();

  if (stateEdit.edit) {
    setValue("nombre", stateEdit.edit.data.nombre);
    setValue("precio", stateEdit.edit.data.precio);
    setValue("valoracion", stateEdit.edit.data.valoracion);
  }

  async function handleEditar(item) {
    // Actualizar en cliente
    statePieza.setPieza(
      statePieza.pieza.map((pieza) => {
        if (pieza.id == item.id) {
          // Modificamos el data de pieza
          pieza.data = item.data;
        }
        return pieza;
      })
    );

    await editarPieza(item);
  }
  async function handleAgregar(item) {
    //añadir en servidor
    const objId = await guardar(item);

    //añadir en cliente
    statePieza.setPieza(statePieza.pieza.concat({ id: objId, data: item }));
  }

  function onSubmit(formData) {
    console.log(formData);
    if (!stateEdit.edit) {
      // Tenemos que guardar
      handleAgregar(formData);
      // Reseteamos campos

    setValue("nombre",);
    setValue("precio",);
    setValue("valoracion",);
    } else {
      // Tenemos que editar
      handleEditar({ id: stateEdit.edit.id, data: formData });

      // reseteamos el formulario y la variable
      stateEdit.setEdit(null);
      reset();
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control {...register("nombre")} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPrecio">
        <Form.Label>Precio</Form.Label>
        <Form.Control {...register("precio")} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicValoracion">
        <Form.Label>Valoracion</Form.Label>
        <Form.Control {...register("valoracion")} />
      </Form.Group>
      <Button variant="primary" type="submit">
        {stateEdit.edit ? "Editar" : "Guardar"}
      </Button>
    </Form>
  );
};

export default GuardarPiezas;
