
export const FormularioRegistro = ({
  nombre,
  setNombre,
  edad,
  setEdad,
  contrasena,
  setContrasena,
  handleRegister
}) => {
  return (
    <>
      <h2 className="auth-login__title">Registro</h2>
      <form className="auth-login__form" onSubmit={handleRegister}>
        <input
          type="text"
          className="auth-login__input"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="number"
          className="auth-login__input"
          placeholder="Edad"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
          required
        />
        <input
          type="password"
          className="auth-login__input"
          placeholder="Contraseña"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          required
        />
        <button type="submit" className="auth-login__submit">
          Registrarse
        </button>
      </form>
      <p className="auth-login__footer">
        ¿Ya tienes cuenta?{" "}
        <a href="/" className="auth-login__link">
          Inicia sesión
        </a>
      </p>
    </>
  );
};



