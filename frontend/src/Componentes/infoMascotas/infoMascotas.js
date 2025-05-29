import React from 'react';
import './infoMascotas.css';

const InfoMascotas = ({ mascotas }) => {
  return (
    <div className="info-mascotas">
      <h2>Información de Mascotas</h2>
      {mascotas.length === 0 ? (
        <p>No hay mascotas registradas.</p>
      ) : (
        <ul className="lista-mascotas">
          {mascotas.map((mascota) => (
            <li key={mascota.id_mascota}>
              <div className="campo"><strong>Nombre:</strong> <span>{mascota.nombre}</span></div>
              <div className="campo"><strong>Especie:</strong> <span>{mascota.especie}</span></div>
              <div className="campo"><strong>Raza:</strong> <span>{mascota.raza}</span></div>
              <div className="campo"><strong>Edad:</strong> <span>{mascota.edad} años</span></div>
              <div className="campo"><strong>Última vacunación:</strong> <span>{mascota.fecha_ultima_vacunacion || 'No registrada'}</span></div>
              <div className="campo"><strong>Próxima vacunación:</strong> <span>{mascota.fecha_proxima_vacunacion || 'No registrada'}</span></div>
              <div className="campo"><strong>Última desparasitación:</strong> <span>{mascota.fecha_ultima_desparasitacion || 'No registrada'}</span></div>
              <div className="campo"><strong>Próxima desparasitación:</strong> <span>{mascota.fecha_proxima_desparasitacion || 'No registrada'}</span></div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InfoMascotas;