export const registrarUsuario = async (nombre, edad, contrasena) => {
  const response = await fetch("http://localhost:5006/api/registro", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre, edad, contrasena }),
  });
  const data = await response.json();
  return { response, data };
};