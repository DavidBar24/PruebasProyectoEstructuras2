
const ResumenPerfil = ({ perfil }) => (
  <div className="resumen-perfil">
    <h2>Resumen de tu Perfil: {perfil.nombre}</h2>
    
    <h3>Servicios:</h3>
    <ul>
      {perfil.servicios.map((serv, idx) => (
        <li key={idx}>{serv.nombre} - ${serv.costo}</li>
      ))}
    </ul>
    
    <h3>Beneficios:</h3>
    <ul>
      {perfil.beneficios.map((ben, idx) => (
        <li key={idx}>{ben.nombre}</li>
      ))}
    </ul>
    
    <h3>Costo Total: ${perfil.costo}/mes</h3>
  </div>
);

export default ResumenPerfil;