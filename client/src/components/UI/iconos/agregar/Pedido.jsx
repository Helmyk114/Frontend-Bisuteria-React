import React from "react";
import { Link } from "react-router-dom";

const AgregarPedido = ({ props }) => {
  return (
    <Link to={"/productos/vendedor"}>
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
          <path d="M21 7H3V3h18zm-8 12c0 .7.13 1.37.35 2H4V8h16v5.09c-.33-.05-.66-.09-1-.09c-3.31 0-6 2.69-6 6m2-6v-1.5c0-.28-.22-.5-.5-.5h-5c-.28 0-.5.22-.5.5V13zm5 5v-3h-2v3h-3v2h3v3h2v-3h3v-2z" />
        </svg>
          <h1 style={{fontFamily: "roboto"}}>AGREGAR PEDIDO</h1>
      </div>
    </Link>
  );
};

export default AgregarPedido;
