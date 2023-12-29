import React from 'react';
import BootstrapCard from 'react-bootstrap/Card';
import './styleListWorkers.css'; // Asegúrate de importar los estilos necesarios
import trabajador from '../../img/trabajo-en-equipo.png';
import editarIcon from '../../img/editar.png';
import eliminarIcon from '../../img/marca-x.png';

function CustomCard({nombre}) {
  return (
    <div>
      {/* Contenedor con espacio en el inicio y el final, y border radius */}
      <div className="gray-container">
        {/* Imagen redonda a la izquierda */}
        <div className="round-image-container">
          <img className="round-image" src={trabajador} alt="Round Image" />
        </div>

        {/* Carta con espacio, border radius y contenido centrado */}
        <BootstrapCard className="content-card">
          <BootstrapCard.Body>
            {/* Iconos de editar y eliminar al inicio */}
            <div className="icons-container">
              <img className="icon" src={editarIcon} alt="Editar Icon" />
              <img className="icon" src={eliminarIcon} alt="Eliminar Icon" />
            </div>

            {/* Título centrado */}
            <BootstrapCard.Title className="centered-title">{nombre}</BootstrapCard.Title>
          </BootstrapCard.Body>
        </BootstrapCard>
      </div>
    </div>
  );
}

export default CustomCard;
