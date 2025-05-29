import React from "react";
import FormularioVacunacion from "./FormularioVacunacion";
import FormularioDesparasitacion from "./FormularioDesparasitacion";
import MascotaCard from "./MascotaCard";

const DesparaYVacunaComponent = ({
  mascotas,
  loading,
  error,
  selectedMascota,
  setSelectedMascota,
  vacunasAnteriores,
  setVacunasAnteriores,
  vacunasFaltantes,
  setVacunasFaltantes,
  fechaUltimaVacuna,
  setFechaUltimaVacuna,
  fechaVacuna,
  setFechaVacuna,
  desparasitadoAnterior,
  setDesparasitadoAnterior,
  fechaDesparasitacionAnterior,
  setFechaDesparasitacionAnterior,
  fechaDesparasitacion,
  setFechaDesparasitacion,
  agendarCita,
  mensaje
}) => (
  <div className="app-container">
    <h2>Control de Desparasitación y Vacunación</h2>
    {loading && <p>Cargando mascotas...</p>}
    {error && <p className="error">{error}</p>}

    <div className="lista-mascotas">
      {Array.isArray(mascotas) && mascotas.length > 0 ? (
        mascotas.map(m => (
          <MascotaCard
            key={m.id}
            mascota={m}
            selected={m.id === selectedMascota}
            onSelect={setSelectedMascota}
          />
        ))
      ) : (
        !loading && <p>No hay mascotas registradas.</p>
      )}
    </div>

    <div className="selector-formulario">
      <button onClick={() => setVacunasAnteriores("si")} className="btn-opcion">
        Vacunación
      </button>
      <button onClick={() => setDesparasitadoAnterior("si")} className="btn-opcion">
        Desparasitación
      </button>
    </div>

    {vacunasAnteriores === "si" && (
      <FormularioVacunacion
        mascotas={mascotas}
        selectedMascota={selectedMascota}
        vacunasAnteriores={vacunasAnteriores}
        setVacunasAnteriores={setVacunasAnteriores}
        vacunasFaltantes={vacunasFaltantes}
        setVacunasFaltantes={setVacunasFaltantes}
        fechaUltimaVacuna={fechaUltimaVacuna}
        setFechaUltimaVacuna={setFechaUltimaVacuna}
        fechaVacuna={fechaVacuna}
        setFechaVacuna={setFechaVacuna}
        agendarCita={agendarCita}
      />
    )}

    {desparasitadoAnterior === "si" && (
      <FormularioDesparasitacion
        mascotas={mascotas}
        selectedMascota={selectedMascota}
        desparasitadoAnterior={desparasitadoAnterior}
        setDesparasitadoAnterior={setDesparasitadoAnterior}
        fechaDesparasitacionAnterior={fechaDesparasitacionAnterior}
        setFechaDesparasitacionAnterior={setFechaDesparasitacionAnterior}
        fechaDesparasitacion={fechaDesparasitacion}
        setFechaDesparasitacion={setFechaDesparasitacion}
        agendarCita={agendarCita}
      />
    )}

    {mensaje && <div className="mensaje-flotante">{mensaje}</div>}
  </div>
);

export default DesparaYVacunaComponent;