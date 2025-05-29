
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormularioLogin } from "../../Componentes/Autenticacion/FormularioLogin";
import { MensajeEstado } from "../../Componentes/Autenticacion/MensajeEstado";
import { autenticarUsuario } from "../../servicioss/authServicio";
import "../../Styles/login.css";
import "../../Styles/loginmessage.css";


export const LoginContenedor = () => {
  const [nombre, setNombre] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const { response, data } = await autenticarUsuario(nombre, contrasena);
    
    if (response.ok) {
      setShowSuccess(true);
      localStorage.setItem("token", data.token);
      setTimeout(() => navigate("/veterinaria"), 2000);
    } else {
      setErrorMessage(data.error || "Error desconocido");
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
        nombre={nombre}
      />
      <FormularioLogin
        nombre={nombre}
        setNombre={setNombre}
        contrasena={contrasena}
        setContrasena={setContrasena}
        handleLogin={handleLogin}
      />
    </div>
  );
};