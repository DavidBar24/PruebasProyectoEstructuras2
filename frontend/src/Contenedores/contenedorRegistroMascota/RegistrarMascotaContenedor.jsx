import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Mascota from '../../Componentes/RegistrarMascota/Mascota';
import Mensaje from '../../Componentes/RegistrarMascota/Mensaje';
import '../../Styles/registrarMascota..css';

const RegistrarMascotaContenedor = () => {
  const [especie, setEspecie] = useState('');
  const [raza, setRaza] = useState('');
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [mensaje, setMensaje] = useState('');
  const navigate = useNavigate();

  const manejarRegistro = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    try {
      const response = await fetch('http://localhost:5006/api/registrar-mascota', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ especie, raza, nombre, edad }),
      });

      const data = await response.json();
      
      if (response.ok) {
        setMensaje('✅ ¡Mascota registrada con éxito!');
        setTimeout(() => {
          navigate('/veterinaria');
          setMensaje('');
        }, 2000);
      } else {
        throw new Error(data.error || 'Error en el registro');
      }
    } catch (error) {
      setMensaje(`❌ Error: ${error.message}`);
      setTimeout(() => setMensaje(''), 3000);
    }
  };

  return (
    <div className="contenedor-principal">
      <div className="tarjeta-registro">
        <h1 className="titulo-registro">
          <span role="img" aria-label="dog">🐶</span> Nueva Mascota <span role="img" aria-label="cat">🐱</span>
        </h1>
        <Mensaje mensaje={mensaje} />
        <Mascota
          especie={especie}
          raza={raza}
          nombre={nombre}
          edad={edad}
          onEspecieChange={(e) => setEspecie(e.target.value)}
          onRazaChange={(e) => setRaza(e.target.value)}
          onNombreChange={(e) => setNombre(e.target.value)}
          onEdadChange={(e) => setEdad(e.target.value)}
          onSubmit={manejarRegistro}
        />
      </div>
    </div>
  );
};

export default RegistrarMascotaContenedor;