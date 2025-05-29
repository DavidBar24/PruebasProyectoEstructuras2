// Paginas/Calendario/CalendarioCitas.jsx
import React, { useState, useEffect } from "react";
import Calendario from "../../Componentes/Calendario/calendario";

const CalendarioCitas = () => {
  const [citas, setCitas] = useState([]);
  const [nuevaCita, setNuevaCita] = useState({
    fecha_hora: "",
    motivo: "",
    id_cliente: "",
    id_mascota: "",
  });

  const cargarCitas = async () => {
    try {
      const res = await fetch("http://localhost:5006/api/citas");
      if (!res.ok) throw new Error("Error al cargar citas");
      const data = await res.json();
      setCitas(data);
    } catch (err) {
      console.error("Error cargando citas:", err);
    }
  };

  useEffect(() => {
    cargarCitas();
  }, []);

  const handleDateClick = (info) => {
    const fechaConHora = `${info.dateStr}T09:00`;
    setNuevaCita({ ...nuevaCita, fecha_hora: fechaConHora });
  };

  const handleInputChange = (e) => {
    setNuevaCita({ ...nuevaCita, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { fecha_hora, motivo, id_cliente, id_mascota } = nuevaCita;

    if (!fecha_hora || !motivo || !id_cliente || !id_mascota) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5006/api/agendar-cita-calendario", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevaCita),
      });

      const result = await response.json();

      if (response.ok) {
        alert("✅ Cita agendada con éxito 🐾");
        setNuevaCita({ fecha_hora: "", motivo: "", id_cliente: "", id_mascota: "" });
        cargarCitas();
      } else {
        alert("Error al agendar la cita: " + (result.error || "Error desconocido"));
      }
    } catch (error) {
      console.error("Error de red:", error);
      alert("Error de conexión con el servidor");
    }
  };

  return (
    <div className="wrapper">
      <div>
        <h1>📅 Calendario de Citas Veterinarias</h1>
        <Calendario citas={citas} onDateClick={handleDateClick} />
      </div>

      <div>
        <h2>Agendar Cita</h2>
        <form onSubmit={handleSubmit}>
          <label>Fecha y Hora:</label>
          <input
            type="datetime-local"
            name="fecha_hora"
            value={nuevaCita.fecha_hora}
            onChange={handleInputChange}
            required
          />
          <label>Motivo:</label>
          <input
            type="text"
            name="motivo"
            value={nuevaCita.motivo}
            onChange={handleInputChange}
            required
          />
          <label>ID Cliente:</label>
          <input
            type="text"
            name="id_cliente"
            value={nuevaCita.id_cliente}
            onChange={handleInputChange}
            required
          />
          <label>ID Mascota:</label>
          <input
            type="text"
            name="id_mascota"
            value={nuevaCita.id_mascota}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Agendar</button>
        </form>
      </div>
    </div>
  );
};

export default CalendarioCitas;
