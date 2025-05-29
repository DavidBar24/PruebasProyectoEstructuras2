import React from "react";

const FormularioDesparasitacion = ({
  mascotas,
  selectedMascota,
  desparasitadoAnterior,
  setDesparasitadoAnterior,
  fechaDesparasitacionAnterior,
  setFechaDesparasitacionAnterior,
  fechaDesparasitacion,
  setFechaDesparasitacion,
  agendarCita
}) => (
  <div className="formulario-cita">
    <h3>📋 Formulario de Desparasitación</h3>
    {selectedMascota ? (
      <div className="grupo">
        <label>Mascota:</label>
        <span>{mascotas.find((m) => m.id === selectedMascota)?.nombre}</span>
      </div>
    ) : (
      <p>Selecciona una mascota</p>
    )}
    <div className="grupo">
      <label>¿Se ha desparasitado antes?</label>
      <select
        value={desparasitadoAnterior}
        onChange={(e) => setDesparasitadoAnterior(e.target.value)}
      >
        <option value="">Seleccionar</option>
        <option value="si">Sí</option>
        <option value="no">No</option>
      </select>
    </div>
    {desparasitadoAnterior === "si" && (
      <div className="grupo">
        <label>Fecha anterior de desparasitación:</label>
        <input
          type="date"
          value={fechaDesparasitacionAnterior}
          onChange={(e) => setFechaDesparasitacionAnterior(e.target.value)}
        />
      </div>
    )}
    <div className="grupo">
      <label>Fecha de desparasitación:</label>
      <input
        type="date"
        value={fechaDesparasitacion}
        onChange={(e) => setFechaDesparasitacion(e.target.value)}
        required
      />
    </div>
    <button className="btn-enviar" onClick={() => agendarCita("DESPARASITACION")}>
      Confirmar Desparasitación
    </button>
  </div>
);

export default FormularioDesparasitacion;