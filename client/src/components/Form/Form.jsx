import {useForm} from 'react-hook-form'
import React from 'react';
import Form from 'react-bootstrap/Form';
import './style.css';
// Estilos CSS en formato de plantilla literal

function Formulario() {

  const {register, handleSubmit, formState: {errors} } = useForm()

  const onSubmit = handleSubmit((data) => {console.log(data) })

  return (
      <div className="form-container">
        <div className="titulo">TEJIENDO UN MUNDO MULTICOLOR</div>
        <div className="subtitulo">Inicia sesión con tu nombre de usuario y contraseña asignada</div>
        <form onSubmit={onSubmit}>
          <label htmlFor="correo">usuario</label>
          <input type="email" id="correo" name="correo" {...register("correo", {required: {value: true, message: "email es requerido"} })} />

          {
            errors.correo && <span>{errors.correo.message}</span>
          }

          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="password" {...register("password", {required: {value: true, message: "contraseña es requerido"} })} />

          {
            errors.password && <span>{errors.password.message}</span>
          }

          <button className='login-button' type="submit">Iniciar Sesion</button>
        </form>

      </div>
  );
}

export default Formulario;