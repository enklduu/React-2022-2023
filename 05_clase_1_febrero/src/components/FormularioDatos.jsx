import React from "react";
import { useForm } from "react-hook-form";
import { validarEdad } from "../validations/Validaciones";

const FormularioDatos = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      nombre:"Ivan",
      apellidos:"Cobos Marchal",
      edad:21,
    }
  });
  const miSubmit = (data) => console.log(data);
  const tieneCarnet = watch("carnet");
  // console.log(tieneCarnet);
  return (
    <div>
      <form onSubmit={handleSubmit(miSubmit)}>
        <div>
          <label>Nombre</label>
          <input
            type="text"
            {...register("nombre", { required: true, maxLength: 10 })}
          />
          {/* En ves de name="nombre" le damos un {...register("nombre")}
          en ves de if hacemos una interrogasion
          */}
          {errors.nombre?.type === "required" && (
            <p style={{ color: "red" }}>
              Campo obligatorio debe tener más de 10 caracteres
            </p>
          )}
        </div>
        <div>
          <label>Apellidos</label>
          <input type="text" {...register("apellidos", { required: true })} />
          {errors.apellidos?.type === "required" && (
            <p style={{ color: "red" }}>Campo obligatorio</p>
          )}
        </div>
        <div>
          <label>Edad</label>
          <input
            type="text"
            {...register("edad", { required: true, validate: validarEdad })}
          />
          {errors.edad?.type === "required" && (
            <p style={{ color: "red" }}>
              Campo obligatorio
            </p>
          )}
          {errors.edad?.type === "validate" && (
            <p style={{ color: "red" }}>
              Edad debe ser numerico
            </p>
          )}
          
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z.-]+\.[A-Z]{2,4}$/i,
            })}
          />
          {errors.email?.type === "required" && <p>Campo obligatorio</p>}
        </div>
        <div>
          <label>Código Postal</label>
          <input
            type="text"
            {...register("cp", {
              required: true,
              minLength: 5,
              maxLength: 5,
              pattern: /^[0-5][0-9]{4}$/gm,
            })}
          />
        </div>
        <div>
          <select {...register("procedencia")}>
            <option value="andalucia">Andalusia</option>
            <option value="no_andalucia">Fuera de Andalusía</option>
          </select>
        </div>
        <div>
          <input type="submit" value="enviar" />
        </div>
        <label>Uso del watch{watch("nombre")}</label>
        <div>
            <label>Dispone de un carnet de conducir</label>
            <input type="checkbox" {... register("carnet")}/>
        </div>

        {tieneCarnet && (
            <div>
            <label>Introduzca fecha expedición</label>
            <input type="date" {... register("fecha")}/>
        </div>
        ) }
        
      </form>
    </div>
  );
};

export default FormularioDatos;