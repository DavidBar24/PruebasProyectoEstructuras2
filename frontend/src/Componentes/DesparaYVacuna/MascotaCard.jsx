import React from "react";

const MascotaCard = ({ mascota, selected, onSelect }) => (
  <div
    className={`tarjeta-mascota ${selected ? "selected" : ""}`}
    onClick={() => onSelect(mascota.id)}
  >
    <h4>{mascota.nombre}</h4>
    <p>Última desparasitación: {mascota.ultimo_dia_desparasitacion || "N/A"}</p>
    <p>Próxima desparasitación: {mascota.nuevo_dia_desparasitar || "N/A"}</p>
    <p>Última vacunación: {mascota.ultimo_dia_vacunacion || "N/A"}</p>
    <p>Próxima vacunación: {mascota.nuevo_dia_vacunacion || "N/A"}</p>
  </div>
);

export default MascotaCard;