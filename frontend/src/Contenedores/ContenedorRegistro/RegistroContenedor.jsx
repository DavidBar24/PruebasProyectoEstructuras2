
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormularioRegistro } from "../../Componentes/AutenticacionReg/FormularioRegistro";
import { MensajeEstado } from "../../Componentes/AutenticacionReg/MensajeEstadoReg";
import { registrarUsuario } from "../../servicioss/authServicioReg";
import "../../Styles//login.css";
import "../../Styles/loginmessage.css";

export const RegistroContenedor = () => {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { response, data } = await registrarUsuario(nombre, edad, contrasena);
      
      if (response.ok) {
        setShowSuccess(true);
        localStorage.setItem("token", data.token);
        localStorage.setItem("idUsuario", data.idUsuario);
        setTimeout(() => navigate("/"), 2000);
      } else {
        setErrorMessage(data.error || "Error desconocido");
        setShowError(true);
        setTimeout(() => setShowError(false), 3000);
      }
    } catch (error) {
      setErrorMessage("Error de conexión");
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    }
  };

  return (
    <div className="auth-login">
      <MensajeEstado 
        showSuccess={showSuccess}
        showError={showError}
        errorMessage={errorMessage}
      />
      <FormularioRegistro
        nombre={nombre}
        setNombre={setNombre}
        edad={edad}
        setEdad={setEdad}
        contrasena={contrasena}
        setContrasena={setContrasena}
        handleRegister={handleRegister}
      />
    </div>
  );
};