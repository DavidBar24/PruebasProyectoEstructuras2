import React from "react";

const vacunasPredefinidas = [
  "Rabia",
  "Moquillo canino (DHPP)",
  "Parvovirus",
  "Leptospirosis",
  "Bordetella (Tos de las perreras)",
  "Influenza canina",
  "Leishmaniasis",
  "Triple felina (Panleucopenia, Calicivirus, Rinotraqueitis)",
  "Leucemia felina (FeLV)",
  "Peritonitis Infecciosa Felina (PIF)",
  "Giardia",
  "Coronavirus canino"
];

const FormularioVacunacion = ({
  mascotas,
  selectedMascota,
  vacunasAnteriores,
  setVacunasAnteriores,
  vacunasFaltantes,
  setVacunasFaltantes,
  fechaUltimaVacuna,
  setFechaUltimaVacuna,
  fechaVacuna,
  setFechaVacuna,
  agendarCita
}) => (
  <div className="formulario-cita">
    <h3>📋 Formulario de Vacunación</h3>
    {selectedMascota ? (
      <div className="grupo">
        <label>Mascota:</label>
        <span>{mascotas.find((m) => m.id === selectedMascota)?.nombre}</span>
      </div>
    ) : (
      <p>Selecciona una mascota</p>
    )}

    <div className="grupo">
      <label>¿Vacunas anteriores?</label>
      <select
        value={vacunasAnteriores}
        onChange={(e) => {
          setVacunasAnteriores(e.target.value);
          setVacunasFaltantes([]);
        }}
      >
        <option value="">Seleccionar</option>
        <option value="si">Sí</option>
        <option value="no">No</option>
      </select>
    </div>

    {vacunasAnteriores === "si" && (
      <div className="grupo">
        <label>Fecha última vacunación:</label>
        <input
          type="date"
          value={fechaUltimaVacuna}
          onChange={(e) => setFechaUltimaVacuna(e.target.value)}
          required
        />
      </div>
    )}

    <div className="grupo">
      <label>Vacunas pendientes:</label>
      <div className="checkbox-group">
        {vacunasPredefinidas.map((vacuna) => (
          <label key={vacuna}>
            <input
              type="checkbox"
              checked={vacunasFaltantes.includes(vacuna)}
              onChange={(e) => {
                const updated = e.target.checked
                  ? [...vacunasFaltantes, vacuna]
                  : vacunasFaltantes.filter((v) => v !== vacuna);
                setVacunasFaltantes(updated);
              }}
            />
            {vacuna}
          </label>
        ))}
      </div>
    </div>

    <div className="grupo">
      <label>Fecha próxima vacunación:</label>
      <input
        type="date"
        value={fechaVacuna}
        onChange={(e) => setFechaVacuna(e.target.value)}
        required
      />
    </div>
    <button className="btn-enviar" onClick={() => agendarCita("VACUNACION")}>
      Confirmar Vacunación
    </button>
  </div>
);

export default FormularioVacunacion;