import PerfilBuilderContainer from '../Contenedores/Builder/PerfilBuilderContainer';

const PerfilBuilderPage = () => {
  return (
    <div className="page">
      <h1>Creador de Perfiles Veterinarios</h1>
      <p>Selecciona servicios y beneficios para crear un perfil personalizado</p>
      <PerfilBuilderContainer />
    </div>
  );
};

export default PerfilBuilderPage;