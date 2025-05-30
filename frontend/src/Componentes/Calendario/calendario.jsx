import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./calendario.css";

const Calendario = ({ citas, onDateClick }) => {
  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      headerToolbar={{
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
      }}
      dateClick={onDateClick}
      events={
        Array.isArray(citas)
          ? citas.map((cita) => ({
              title: cita.motivo,
              start: cita.fecha_hora,
            }))
          : []
      }
    />
  );
};

export default Calendario;

