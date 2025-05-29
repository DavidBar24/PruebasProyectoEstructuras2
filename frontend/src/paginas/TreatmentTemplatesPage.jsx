import TreatmentManagerContainer from '../Contenedores/Treatament/TreatmentManagerContainer';

const TreatmentTemplatesPage = () => {
  return (
    <div className="treatment-templates-page">
      <header>
        <h1>🩺 Gestión de Tratamientos Veterinarios</h1>
        <p>Utilice plantillas predefinidas y clónelas para casos específicos</p>
      </header>
      
      <TreatmentManagerContainer />
      
      <footer>
        <p>Sistema de gestión de tratamientos - Veterinaria Amigos Peludos © 2023</p>
      </footer>
    </div>
  );
};

export default TreatmentTemplatesPage;