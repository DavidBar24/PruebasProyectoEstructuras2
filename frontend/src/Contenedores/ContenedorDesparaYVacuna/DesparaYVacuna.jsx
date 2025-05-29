import React, { useEffect, useState } from "react";
import DesparaYVacunaComponent from "../../Componentes/DesparaYVacuna/UnificacionDespaYVacuna";
import "../../Styles/estiloDeVa.css";

const API_BASE = "http://localhost:5006/api";

const ContenedorDesparaYVacuna = () => {
  const [mascotas, setMascotas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedMascota, setSelectedMascota] = useState(null);
  const [vacunasAnteriores, setVacunasAnteriores] = useState("");
  const [vacunasFaltantes, setVacunasFaltantes] = useState([]);
  const [fechaUltimaVacuna, setFechaUltimaVacuna] = useState("");
  const [fechaVacuna, setFechaVacuna] = useState("");
  const [desparasitadoAnterior, setDesparasitadoAnterior] = useState("");
  const [fechaDesparasitacionAnterior, setFechaDesparasitacionAnterior] = useState("");
  const [fechaDesparasitacion, setFechaDesparasitacion] = useState("");
  const [mensaje, setMensaje] = useState("");

  const toDate = (str) => (str ? new Date(str) : null);

  useEffect(() => {
    const obtenerMascotas = async () => {
      setLoading(true);
      setError("");
      const token = localStorage.getItem("token");

      if (!token) {
        setError("Sesión expirada. Inicia sesión nuevamente.");
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(`${API_BASE}/mis-mascotas`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        if (!res.ok) throw new Error(`Status: ${res.status}`);

        const data = await res.json();
        const arr = Array.isArray(data) ? data : [];
        arr.sort((a, b) => {
          const nextA = toDate(a.nuevo_dia_vacunacion) || toDate(a.nuevo_dia_desparasitar);
          const nextB = toDate(b.nuevo_dia_vacunacion) || toDate(b.nuevo_dia_desparasitar);
          if (!nextA) return 1;
          if (!nextB) return -1;
          return nextA - nextB;
        });

        setMascotas(arr);
      } catch (err) {
        console.error(err);
        setError("Error al cargar mascotas.");
        setMascotas([]);
      } finally {
        setLoading(false);
      }
    };

    obtenerMascotas();
  }, []);

  const agendarCita = async (tipo) => {
    const token = localStorage.getItem("token");
    if (!token) {
      setMensaje("⚠ Sesión expirada, vuelve a iniciar sesión.");
      setTimeout(() => (window.location.href = "/login"), 2000);
      return;
    }

    if (!selectedMascota) {
      setMensaje("⚠ Selecciona una mascota");
      return;
    }

    const fecha = tipo === "VACUNACION" ? fechaVacuna : fechaDesparasitacion;
    if (!fecha) {
      setMensaje("⚠ Selecciona una fecha");
      return;
    }

    if (tipo === "VACUNACION" && new Date(fecha) < new Date()) {
      setMensaje("⚠ La fecha de vacunación debe ser futura");
      return;
    }

    try {
      const body = { tipo, fecha, id_mascota: selectedMascota };

      if (tipo === "VACUNACION") {
        body.vacunasExistentes = vacunasAnteriores === "si" ? [] : [];
        body.vacunasFaltantes = vacunasFaltantes;
        body.fechaUltimaVacuna = vacunasAnteriores === "si" ? fechaUltimaVacuna : null;
      }

      if (tipo === "DESPARASITACION") {
        body.fechaDesparasitacionAnterior = desparasitadoAnterior === "si" ? fechaDesparasitacionAnterior : null;
      }

      const res = await fetch(`${API_BASE}/agendar-cita`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(body)
      });

      const resp = await res.json();
      if (res.ok) {
        setMensaje("✅ Cita agendada con éxito");
        await new Promise((r) => setTimeout(r, 500));
        window.location.reload();
      } else {
        setMensaje(`❌ ${resp.error || 'Error interno'}`);
      }
    } catch (err) {
      console.error(err);
      setMensaje("❌ Error de conexión");
    } finally {
      setTimeout(() => setMensaje(""), 3000);
    }
  };

  return (
    <DesparaYVacunaComponent
      mascotas={mascotas}
      loading={loading}
      error={error}
      selectedMascota={selectedMascota}
      setSelectedMascota={setSelectedMascota}
      vacunasAnteriores={vacunasAnteriores}
      setVacunasAnteriores={setVacunasAnteriores}
      vacunasFaltantes={vacunasFaltantes}
      setVacunasFaltantes={setVacunasFaltantes}
      fechaUltimaVacuna={fechaUltimaVacuna}
      setFechaUltimaVacuna={setFechaUltimaVacuna}
      fechaVacuna={fechaVacuna}
      setFechaVacuna={setFechaVacuna}
      desparasitadoAnterior={desparasitadoAnterior}
      setDesparasitadoAnterior={setDesparasitadoAnterior}
      fechaDesparasitacionAnterior={fechaDesparasitacionAnterior}
      setFechaDesparasitacionAnterior={setFechaDesparasitacionAnterior}
      fechaDesparasitacion={fechaDesparasitacion}
      setFechaDesparasitacion={setFechaDesparasitacion}
      agendarCita={agendarCita}
      mensaje={mensaje}
    />
  );
};

export default ContenedorDesparaYVacuna;