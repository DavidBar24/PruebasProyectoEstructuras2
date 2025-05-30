import React, { useState } from 'react';
import { Calendar } from 'lucide-react';

class Servicio {
  getDescription() {
    return '';
  }
  getCost() {
    return 0;
  }
}

class ServicioBasePeluqueria extends Servicio {
  constructor(nombre, precio) {
    super();
    this.nombre = nombre;
    this.precio = precio;
  }
  getDescription() {
    return this.nombre;
  }
  getCost() {
    return this.precio;
  }
}

class ServicioDecorator extends Servicio {
  constructor(servicio) {
    super();
    this.servicio = servicio;
  }
  getDescription() {
    return this.servicio.getDescription();
  }
  getCost() {
    return this.servicio.getCost();
  }
}

class BañoEspecialDecorator extends ServicioDecorator {
  getDescription() {
    return `${this.servicio.getDescription()} + Baño Especial`;
  }
  getCost() {
    return this.servicio.getCost() + 15;
  }
}

class CorteUñasDecorator extends ServicioDecorator {
  getDescription() {
    return `${this.servicio.getDescription()} + Corte de Uñas`;
  }
  getCost() {
    return this.servicio.getCost() + 10;
  }
}

const DecoratorPeluqueria = ({ corte, onConfirm }) => {
  const [showExtras, setShowExtras] = useState(false);
  const [bath, setBath] = useState(false);
  const [nails, setNails] = useState(false);

  const buildService = () => {
    let servicio = new ServicioBasePeluqueria(corte.nombre, corte.precio);
    if (bath) servicio = new BañoEspecialDecorator(servicio);
    if (nails) servicio = new CorteUñasDecorator(servicio);
    return servicio;
  };

  const servicioFinal = buildService();

  const handleConfirm = () => {
    if (onConfirm) onConfirm(servicioFinal);
    else alert(`Servicio confirmado:\n${servicioFinal.getDescription()} - $${servicioFinal.getCost()}`);
  };

  return (
    <div className="decorator-peluqueria p-4 border rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2">{corte.nombre}</h3>
      <p className="mb-4">Precio base: <strong>${corte.precio}</strong></p>
      <button
        className="btn-agendar mb-4 flex items-center space-x-2"
        onClick={() => setShowExtras(!showExtras)}
      >
        <Calendar size={18} />
        <span>{showExtras ? 'Cerrar' : 'Agendar'}</span>
      </button>

      {showExtras && (
        <div className="extras-opciones space-y-2 mb-4">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={bath}
              onChange={() => setBath(!bath)}
            />
            <span>Baño Especial (+ $15)</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={nails}
              onChange={() => setNails(!nails)}
            />
            <span>Corte de Uñas (+ $10)</span>
          </label>
          <div className="resumen-servicio mt-2">
            <p><strong>Servicio:</strong> {servicioFinal.getDescription()}</p>
            <p><strong>Precio total:</strong> ${servicioFinal.getCost()}</p>
          </div>
          <button
            className="btn-confirmar mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            onClick={handleConfirm}
          >
            Confirmar Servicio
          </button>
        </div>
      )}
    </div>
  );
};

export default DecoratorPeluqueria;
