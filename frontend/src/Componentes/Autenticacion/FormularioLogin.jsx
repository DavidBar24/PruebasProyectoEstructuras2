
export const FormularioLogin = ({ nombre, setNombre, contrasena, setContrasena, handleLogin }) => {
    return (
      <>
        <h2 className="auth-login__title">Iniciar Sesión</h2>
        <form className="auth-login__form" onSubmit={handleLogin}>
          <input
            type="text"
            className="auth-login__input"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
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
            Iniciar sesión
          </button>
        </form>
        <p className="auth-login__footer">
          ¿No tienes cuenta?{" "}
          <a href="/register" className="auth-login__link">
            Regístrate
          </a>
        </p>
      </>
    );
  };