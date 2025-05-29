
const BeneficioCard = ({ beneficio, onAdd }) => (
  <div className="beneficio-card">
    <h4>{beneficio.nombre}</h4>
    <p>{beneficio.descripcion}</p>
    <button onClick={() => onAdd(beneficio)}>+ Agregar</button>
  </div>
);

export default BeneficioCard;