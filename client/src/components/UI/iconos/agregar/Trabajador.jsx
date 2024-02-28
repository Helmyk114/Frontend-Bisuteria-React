import React from "react";
import { Link } from "react-router-dom";

const AgregarTrabajador = ({props }) => {
  return (
    <Link to={"/crear/trabajador"}>
      <div className="relative flex gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="currentColor"
          color="#6977E4"
          {...props}
        >
          <path d="M15 14c-2.67 0-8 1.33-8 4v2h16v-2c0-2.67-5.33-4-8-4m-9-4V7H4v3H1v2h3v3h2v-3h3v-2m6 2a4 4 0 0 0 4-4a4 4 0 0 0-4-4a4 4 0 0 0-4 4a4 4 0 0 0 4 4" />
        </svg>
        <h1>AGREGAR TRABAJADORES</h1>
      </div>
    </Link>
  );
};

export default AgregarTrabajador;
