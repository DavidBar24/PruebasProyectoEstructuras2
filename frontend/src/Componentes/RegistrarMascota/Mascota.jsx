import React from 'react';

const Mascota = ({ especie, raza, nombre, edad, onEspecieChange, onRazaChange, onNombreChange, onEdadChange, onSubmit }) => (
  <form onSubmit={onSubmit} className="form-mascota">
    <div className="grupo-formulario">
      <label>Tipo de Mascota:</label>
      <input
        type="text"
        value={especie}
        onChange={onEspecieChange}
        required
        className="input-form"
      />
    </div>

    <div className="grupo-formulario">
      <label>Raza:</label>
      <input
        type="text"
        value={raza}
        onChange={onRazaChange}
        required
        className="input-form"
      />
    </div>

    <div className="grupo-formulario">
      <label>Nombre:</label>
      <input
        type="text"
        value={nombre}
        onChange={onNombreChange}
        required
        className="input-form"
      />
    </div>

    <div className="grupo-formulario">
      <label>Edad:</label>
      <input
        type="text"
        value={edad}
        onChange={onEdadChange}
        required
        className="input-form"
      />
    </div>

    <button type="submit" className="boton-registrar">
      🐾 Registrar Mascota
    </button>
  </form>
);

export default Mascota;