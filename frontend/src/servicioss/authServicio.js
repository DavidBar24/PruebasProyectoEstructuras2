// servicios/authServicio.js
export const autenticarUsuario = async (nombre, contrasena) => {
    const response = await fetch("http://localhost:5006/api/inicio-sesion", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, contrasena }),
    });
    const data = await response.json();
    return { response, data };
  };