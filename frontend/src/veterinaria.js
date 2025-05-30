import { motion } from "framer-motion";
import { Mail, PawPrint, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import BotonLogout from "./Componentes/LogOut/LogOut.jsx"; // Importa el componente logout

import "./veterinaria.css";

const VetButton = ({ children, link }) => (
  <Link to={link} className="vet-btn__container">
    <button className="vet-btn">
      <PawPrint className="vet-btn__icon" size={24} />
      {children}
    </button>
  </Link>
);

const Veterinaria = () => {
  const idUsuario = localStorage.getItem('idUsuario');
  const token = localStorage.getItem("token");

  return (
    <div className="vet-main">
      <header className="vet-main__header">
        🐾 Veterinaria Amigos Peludos
      </header>

     
      {token && <BotonLogout />}

      <nav className="vet-nav">
        <Link to="#servicios" className="vet-nav__item">Servicios</Link>
        <Link to="#galeria" className="vet-nav__item">Galería</Link>
        <Link to="#contacto" className="vet-nav__item">Contacto</Link>
      </nav>

      <motion.div className="vet-content">
        <section id="servicios" className="vet-section">
          <h2 className="vet-section__title">Nuestros Servicios</h2>
          <div className="vet-services">
            <VetButton link="/desparasitacion-vacunacion">Vacunación y desparasitación</VetButton>
            <VetButton link="/peluqueria-estetica">Peluquería y estética canina y felina</VetButton>
            <VetButton link={`/mascotas-usuario/${idUsuario}`}>Información de tu mascota</VetButton>
            <VetButton link="/Registrar-Mascota">Registrar Mascota</VetButton>
            <VetButton link="/galeria">Galería Mascota</VetButton>
            <VetButton link= "/Calculadora">Alimentacion de tu Mascota</VetButton>
             <VetButton link="/crear-perfil">Creador de Perfiles</VetButton>
             <VetButton link="/treatment-templates">Plantillas caso Veterinario</VetButton>

            
          </div>
        </section>

        <section id="galeria" className="vet-section">
          <h2 className="vet-section__title">Galería</h2>
          <div className="vet-gallery">
            {["Perrito.jpg", "imagen2.jpg", "imagen4.jpg"].map((image, index) => (
              <div key={index} className="vet-gallery__card">
                <img
                  src={`${process.env.PUBLIC_URL}/images/${image}`}
                  alt="Mascota feliz"
                  className="vet-gallery__img"
                />
              </div>
            ))}
          </div>
        </section>

        <section id="contacto" className="vet-section">
          <h2 className="vet-section__title">Contacto</h2>
          <p className="vet-contact__info">
            <Mail className="vet-contact__icon" /> contacto@amigospeludos.com
          </p>
          <p className="vet-contact__info">
            <Phone className="vet-contact__icon" /> +123 456 789
          </p>
          <VetButton link="/agendar-Cita">Agendar Cita</VetButton>
        </section>
      </motion.div>

      <footer className="vet-footer">
        Veterinaria Amigos Peludos © 2025
      </footer>
    </div>
  );
};

export default Veterinaria;