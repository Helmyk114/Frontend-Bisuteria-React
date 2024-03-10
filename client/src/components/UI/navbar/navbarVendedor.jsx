import React from "react";
import "./navbar.css";

import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";

import Avatares from "../avatar/Avatares";
import Campana from "../iconos/Notificacion";
import BotonRetroceder from "../iconos/Retroceder";
import AgregarPedido from "../iconos/agregar/Pedido";
import PerfilNav from "../iconos/PerfilNavbar";
import CerrarSesionNav from "../iconos/CerrarSesionNavbars";
import Inicio from "../iconos/Inicio";

export default function NavigateVEN({ children, height }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <Navbar 
      style={{ backgroundColor: "#6977E4" }}
      height={height || "90px"}
      onMenuOpenChange={setIsMenuOpen}
    >
      {children}
      <NavbarContent justify="end" style={{ color: "white" }}  >
        <NavbarMenuToggle  
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden" 
        />
        <DesplegableVEN />
      </NavbarContent>
    </Navbar>
  );
}

const Icono = ({ radio, imagen, height, width, className }) => {
  return (
    <NavbarBrand className="justify-center" style={{ marginTop: "5px" }}>
      <Avatares
        radio={radio}
        src={imagen}
        height={height}
        width={width}
        className={className}
      />
    </NavbarBrand>
  );
};

const Titulo = ({ titulo, espacio }) => {
  return (
    <NavbarContent style={{ marginTop: "0px" }} justify={espacio}>
      <NavbarItem>
        <h1
          className="titulo"
          style={{
            fontFamily: "Bebas Neue, sans-serif",
            fontSize: "30px",
            color: "#fff",
          }}
        >
          {titulo}
        </h1>
      </NavbarItem>
    </NavbarContent>
  );
};

const Texto = ({ titulo, nombre, rol }) => {
  return (
    <NavbarContent>
      <NavbarItem>
        <h1
          className="titulo"
          style={{
            marginTop: "35px",
            marginBottom: "5px",
            fontFamily: "Bebas Neue, sans-serif",
            fontSize: "40px",
            color: "#fff",
          }}
        >
          {titulo}
        </h1>
        <h2
          className="nombre"
          style={{
            marginTop: "5px",
            fontFamily: "Roboto, sans-serif",
            fontSize: "16px",
            color: "#fff",
          }}
        >
          {nombre}
        </h2>

        <h3
          className="rol"
          style={{
            marginTop: "-9px",
            marginBottom: "15px",
            //PONER EL ITALIC
            fontFamily: "Roboto, sans-serif",
            fontSize: "12px",
            color: "#fff",
          }}
        >
          {rol}
        </h3>
      </NavbarItem>
    </NavbarContent>
  );
};

const Notificacion = () => {
  return (
    <NavbarContent style={{ marginTop: "0px", color:"#6977E4" }}>
      <NavbarItem>
        <div>
          <Campana />
        </div>
      </NavbarItem>
    </NavbarContent>
  );
};



const Retroceder = () => {
  return (
    <NavbarContent style={{ marginTop: "0px" }} justify="start">
      <NavbarItem>
        <BotonRetroceder />
      </NavbarItem>
    </NavbarContent>
  );
};

const CerrarSesion = () => {
  return (
    <NavbarContent style={{ marginTop: "0px", color:"#6977E4" }} >
      <NavbarItem>
        <div>
          <CerrarSesionNav/>
        </div>
      </NavbarItem>
    </NavbarContent>
  );
};

const AgregamosPedido = () => {
  return (
    <NavbarContent style={{ marginTop: "0px", color: "#6977E4" }}>
      <NavbarItem>
        <div>
          <AgregarPedido />
        </div>
      </NavbarItem>
    </NavbarContent>
  );
};

const Inicios = () => {
  return (
    <NavbarContent style={{ marginTop: "0px", color: "#6977E4" }}>
      <NavbarItem>
        <div>
          <Inicio ruta="/Vendedor" />
        </div>
      </NavbarItem>
    </NavbarContent>
  );
};

const DesplegableVEN = () => {
  const menuItems = [
    <Inicios/>,
    <Notificacion/>,
    <PerfilNav/>,
    <AgregamosPedido/>,
    <CerrarSesion/>
  ];

  return (
    <NavbarMenu>
    {menuItems.map((item, index) => (
      <NavbarMenuItem key={`${item}-${index}`} >
        <Link  
          className="w-full"
          size="lg"
        >
          {item}
        </Link>
      </NavbarMenuItem>
    ))}
  </NavbarMenu>
  );
};

export { Titulo, Notificacion, Retroceder, Icono, Texto, AgregamosPedido, DesplegableVEN, Inicios};