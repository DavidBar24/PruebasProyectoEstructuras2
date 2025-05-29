
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import InfoMascotas from '../../Componentes/infoMascotas/infoMascotas';

const ContenedorInfoMascotas = () => {
  const { idUsuario } = useParams();
  const [mascotas, setMascotas] = useState([]);

  useEffect(() => {
    const obtenerMascotas = async () => {
      try {
        const respuesta = await fetch(`http://localhost:5006/api/mascotas/${idUsuario}`);
        const datos = await respuesta.json();
        setMascotas(datos.mascotas || []);
      } catch (error) {
        console.error('Error al obtener mascotas:', error);
      }
    };

    obtenerMascotas();
  }, [idUsuario]);

  return <InfoMascotas mascotas={mascotas} />;
};

export default ContenedorInfoMascotas;
