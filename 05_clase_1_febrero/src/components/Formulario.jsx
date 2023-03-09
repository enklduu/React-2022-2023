import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Formulario = ({ setAPI }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const checkValid = watch("check");

  const miSubmit = (data) => {
    setAPI(data);
  };

  const comprobarDatos = watch("nombre" && "localidad");
  return (
    <>
      <form onSubmit={handleSubmit(miSubmit)}>
        <div>
          <label className="fw-bold">Nombre:</label>
          <input type="text" {...register("nombre", { required: true })} />
          {errors.nombre?.type === "required" && (
            <p style={{ color: "red" }}>Introduzca un nombre</p>
          )}
        </div>
        <div>
          <label className="fw-bold">Localidad:</label>
          <input type="text" {...register("localidad", { required: true })} />
          {errors.localidad?.type === "required" && (
            <p style={{ color: "red" }}>Introduzca una localidad</p>
          )}
        </div>
        <div>
          <label className="fw-bold">País:</label>
          <select {...register("pais", { required: true })}>
            <option value="ES">España</option>
            <option value="IT">Italia</option>
            <option value="US">Estados Unidos</option>
            <option value="UK">Reino Unido</option>
          </select>
          {errors.pais?.type === "required" && (
            <p style={{ color: "red" }}>Introduzca un pais</p>
          )}
        </div>
        {comprobarDatos && (
          <div>
            <label className="fw-bold">Token:</label>
            <input type="text" {...register("token", { required: true })} />
          </div>
        )}

        <div>
          <label className="fw-bold">
            ¿Acepta los{" "}
            <span className="text-primary text-decoration-underline">
              términos y condiciones
            </span>
            ?{" "}
          </label>
          <input type="checkbox" {...register("check")} />
        </div>
        {checkValid && <input type="submit" value="Enviar" />}
      </form>
    </>
  );
};

export default Formulario;
