import React from "react";
import { Link } from "react-router-dom";

const PerfilNav = ({ props }) => {
  return (
    <Link to={"/perfil"}>
      <div className="relative flex gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 240 240"
          fill="currentColor"
          color="#6977E4"
          {...props}
        >
          <path
            fill="currentColor"
            d="M230.93 220a8 8 0 0 1-6.93 4H32a8 8 0 0 1-6.92-12c15.23-26.33 38.7-45.21 66.09-54.16a72 72 0 1 1 73.66 0c27.39 8.95 50.86 27.83 66.09 54.16a8 8 0 0 1 .01 8"
          />
        </svg>
          <h1 style={{fontFamily: "roboto"}}>PERFIL</h1>
      </div>
    </Link>
  );
};

export default PerfilNav;
