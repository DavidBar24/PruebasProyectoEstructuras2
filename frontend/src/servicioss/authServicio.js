export const autenticarUsuario = async (nombre, contrasena) => {
  try {
    const response = await fetch("http://localhost:5006/api/inicio-sesion", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, contrasena }),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      return {
        success: false,
        error: data.error || 'Error de autenticación',
        status: response.status
      };
    }

    return {
      success: true,
      token: data.token,
      usuario: data.usuario,
      expiresIn: data.expiresIn
    };

  } catch (error) {
    console.error('Error de red:', error);
    return {
      success: false,
      error: 'Error de conexión con el servidor',
      status: 500
    };
  }
};