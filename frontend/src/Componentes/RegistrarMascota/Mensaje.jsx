import React from 'react';

const Mensaje = ({ mensaje }) => (
  mensaje && (
    <div className={`mensaje ${mensaje.includes('Error') ? 'error' : 'exito'}`}>
      {mensaje}
    </div>
  )
);

export default Mensaje;