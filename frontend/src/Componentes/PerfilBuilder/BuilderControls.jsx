import React from 'react';

const BuilderControls = ({ servicios, beneficios, onAddServicio, onAddBeneficio, onReset, onSetNombre }) => {
  const [nombrePerfil, setNombrePerfil] = React.useState('');

  return (
    <div className="controls">
      <h2>Construye tu Perfil</h2>
      
      <div>
        <label>Nombre del Perfil:</label>
        <input 
          type="text" 
          value={nombrePerfil} 
          onChange={(e) => setNombrePerfil(e.target.value)} 
        />
        <button onClick={() => onSetNombre(nombrePerfil)}>Guardar Nombre</button>
      </div>
      
      <h3>Servicios Disponibles</h3>
      <div className="servicios-list">
        {servicios.map((servicio, idx) => (
          <div key={idx}>
            <button onClick={() => onAddServicio(servicio)}>
              {servicio.nombre} (+${servicio.costo})
            </button>
          </div>
        ))}
      </div>
      
      <h3>Beneficios Adicionales</h3>
      <div className="beneficios-list">
        {beneficios.map((beneficio, idx) => (
          <div key={idx}>
            <button onClick={() => onAddBeneficio(beneficio)}>
              {beneficio.nombre}
            </button>
          </div>
        ))}
      </div>
      
      <button onClick={onReset}>Reiniciar Perfil</button>
    </div>
  );
};

export default BuilderControls;