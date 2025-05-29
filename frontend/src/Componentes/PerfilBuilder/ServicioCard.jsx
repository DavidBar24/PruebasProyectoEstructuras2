
const ServicioCard = ({ servicio, onAdd }) => (
  <div className="servicio-card">
    <h3>{servicio.nombre}</h3>
    <p>{servicio.descripcion}</p>
    <p><strong>Costo: ${servicio.costo}</strong></p>
    <button onClick={() => onAdd(servicio)}>Agregar al perfil</button>
  </div>
);

export default ServicioCard;