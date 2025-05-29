// src/Componentes/BotonLogout.jsx
import { useNavigate } from "react-router-dom";
import "../../Styles/LogOut.css"


const BotonLogout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/"); // Redirige a la raíz
  };

  return (
    <div className="vet-logout__wrapper">
      <button className="vet-logout-btn" onClick={handleLogout}>
        🔒 Cerrar sesión
      </button>
    </div>
  );
};

export default BotonLogout;