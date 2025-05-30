import { useState } from 'react';
import TreatmentEditor from '../../Componentes/TreatmentManager/TreatmentEditor';
import TreatmentTemplateCard from '../../Componentes/TreatmentManager/TreatmentTemplateCard';
import treatmentPrototypes from '../../PatronesDiseño/Prototype/treatmentPrototypes';

const TreatmentManagerContainer = () => {
  const [currentTemplate, setCurrentTemplate] = useState(null);
  const [editedTreatment, setEditedTreatment] = useState(null);
  const [animalTreatments, setAnimalTreatments] = useState([]);
  
  const [animals] = useState([
    { id: 'm1', name: 'Firulais', species: 'Perro', breed: 'Labrador' },
    { id: 'm2', name: 'Misifu', species: 'Gato', breed: 'Siamés' },
    { id: 'm3', name: 'Rex', species: 'Perro', breed: 'Pastor Alemán' }
  ]);

  const handleCloneTemplate = (template) => {
    const clonedTreatment = template.clone();
    setCurrentTemplate(clonedTreatment);
    setEditedTreatment(null);
  };

  const handleApplyTemplate = (template) => {
    const treatmentToApply = template.clone();
    setEditedTreatment(treatmentToApply);
    setCurrentTemplate(null);
  };

  const handleSaveTreatment = (treatment, animalId) => {
    const animal = animals.find(a => a.id === animalId);
    
    setAnimalTreatments([
      ...animalTreatments,
      {
        ...treatment,
        animalId,
        animalName: animal.name,
        date: new Date().toLocaleDateString()
      }
    ]);
    
    setEditedTreatment(null);
    setCurrentTemplate(null);
  };

  return (
    <div className="treatment-manager">
      {!currentTemplate && !editedTreatment ? (
        <div className="template-gallery">
          <h2>Plantillas de Tratamientos</h2>
          <div className="templates-grid">
            {treatmentPrototypes.map((template, index) => (
              <TreatmentTemplateCard
                key={index}
                template={template}
                onClone={handleCloneTemplate}
                onApply={handleApplyTemplate}
              />
            ))}
          </div>
        </div>
      ) : null}
      
      {currentTemplate && (
        <div className="template-clone-view">
          <h2>Clon de: {currentTemplate.name}</h2>
          <TreatmentTemplateCard 
            template={currentTemplate} 
            onApply={() => handleApplyTemplate(currentTemplate)}
          />
          <button onClick={() => setCurrentTemplate(null)}>
            Volver a plantillas
          </button>
        </div>
      )}
      
      {editedTreatment && (
        <TreatmentEditor 
          treatment={editedTreatment}
          animals={animals}
          onSave={handleSaveTreatment}
        />
      )}
      
      {animalTreatments.length > 0 && (
        <div className="applied-treatments">
          <h2>Tratamientos Aplicados</h2>
          <ul>
            {animalTreatments.map((treatment, index) => (
              <li key={index}>
                <strong>{treatment.name}</strong> aplicado a {treatment.animalName} 
                el {treatment.date}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TreatmentManagerContainer;