import { useState } from 'react';
import BuilderControls from '../../Componentes/PerfilBuilder/BuilderControls';
import ResumenPerfil from '../../Componentes/PerfilBuilder/ResumenPerfil';
import PerfilModel from '../../models/PerfilModel';
import ServicioModel from '../../models/ServicioModel';

const PerfilBuilderContainer = () => {
  // Estado para el perfil en construcción
  const [perfil, setPerfil] = useState(new PerfilModel());
  
  // Servicios y beneficios disponibles 
  const [serviciosDisponibles] = useState([
    new ServicioModel('preventivo', 'Chequeo Anual', 50),
    new ServicioModel('premium', 'Plan Integral', 120),
    new ServicioModel('urgencia', 'Emergencia 24/7', 200)
  ]);
  
  const [beneficiosDisponibles] = useState([
    { nombre: 'Descuento en Farmacia', descripcion: '20% de descuento' },
    { nombre: 'Guardería Gratis', descripcion: '2 días al mes' },
    { nombre: 'Asistencia Telefónica', descripcion: '24/7' }
  ]);

  // Handlers para el patrón Builder
  const agregarServicio = (servicio) => {
    const nuevoPerfil = new PerfilModel();
    Object.assign(nuevoPerfil, perfil);
    nuevoPerfil.agregarServicio(servicio);
    setPerfil(nuevoPerfil);
  };

  const agregarBeneficio = (beneficio) => {
    const nuevoPerfil = new PerfilModel();
    Object.assign(nuevoPerfil, perfil);
    nuevoPerfil.agregarBeneficio(beneficio);
    setPerfil(nuevoPerfil);
  };

  const setNombrePerfil = (nombre) => {
    const nuevoPerfil = new PerfilModel();
    Object.assign(nuevoPerfil, perfil);
    nuevoPerfil.setNombre(nombre);
    setPerfil(nuevoPerfil);
  };

  const resetPerfil = () => {
    setPerfil(new PerfilModel());
  };

  return (
    <div className="perfil-builder-container">
      <BuilderControls 
        servicios={serviciosDisponibles}
        beneficios={beneficiosDisponibles}
        onAddServicio={agregarServicio}
        onAddBeneficio={agregarBeneficio}
        onReset={resetPerfil}
        onSetNombre={setNombrePerfil}
      />
      
      <ResumenPerfil perfil={perfil} />
    </div>
  );
};

export default PerfilBuilderContainer;