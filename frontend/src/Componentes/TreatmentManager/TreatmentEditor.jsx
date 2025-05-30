import { useEffect, useState } from 'react';

const TreatmentEditor = ({ treatment, animals, onSave }) => {
 
  const [selectedAnimal, setSelectedAnimal] = useState('');
  const [steps, setSteps] = useState([]);
  const [newStep, setNewStep] = useState({ action: '', duration: '' });
  
  useEffect(() => {
    if (treatment) {
      setSteps([...treatment.steps]);
    }
  }, [treatment]);

  const addStep = () => {
    if (newStep.action.trim()) {
      const stepToAdd = {
        id: Date.now(),
        step: steps.length + 1,
        action: newStep.action.trim(),
        duration: newStep.duration || "Personalizado"
      };
      
      setSteps([...steps, stepToAdd]);
      setNewStep({ action: '', duration: '' });
    }
  };

  const updateStep = (id, field, value) => {
    setSteps(steps.map(step => 
      step.id === id ? { ...step, [field]: value } : step
    ));
  };

  const removeStep = (id) => {
    setSteps(steps.filter(step => step.id !== id));
  };

  const handleSave = () => {
    if (!treatment) return;
    
    const finalTreatment = {
      ...treatment,
      steps: steps.map((step, index) => ({
        ...step,
        step: index + 1 
      }))
    };
    
    onSave(finalTreatment, selectedAnimal);
  };

  if (!treatment) {
    return <div>Seleccione un tratamiento primero</div>;
  }

  return (
    <div className="treatment-editor">
      <h2>Editando: {treatment.name}</h2>
      
      <div className="animal-selection">
        <label>Seleccionar mascota:</label>
        <select 
          value={selectedAnimal} 
          onChange={(e) => setSelectedAnimal(e.target.value)}
          required
        >
          <option value="">-- Seleccione --</option>
          {animals.map(animal => (
            <option key={animal.id} value={animal.id}>
              {animal.name} ({animal.species})
            </option>
          ))}
        </select>
      </div>
      
      <div className="treatment-details">
        <h3>Pasos del tratamiento:</h3>
        
        <div className="steps-list">
          {steps.map((step) => (
            <div key={step.id} className="step-item">
              <div className="step-header">
                <strong>Paso {step.step}:</strong>
                <button 
                  type="button"
                  onClick={() => removeStep(step.id)}
                  className="delete-btn"
                >
                  ✕
                </button>
              </div>
              
              <input
                type="text"
                value={step.action}
                onChange={(e) => updateStep(step.id, 'action', e.target.value)}
                placeholder="Descripción del paso"
              />
              
              <input
                type="text"
                value={step.duration}
                onChange={(e) => updateStep(step.id, 'duration', e.target.value)}
                placeholder="Duración"
              />
            </div>
          ))}
        </div>
        
        <div className="add-step">
          <h4>Agregar nuevo paso:</h4>
          
          <input
            type="text"
            value={newStep.action}
            onChange={(e) => setNewStep({...newStep, action: e.target.value})}
            placeholder="Descripción"
            required
          />
          
          <input
            type="text"
            value={newStep.duration}
            onChange={(e) => setNewStep({...newStep, duration: e.target.value})}
            placeholder="Duración (opcional)"
          />
          
          <button 
            type="button"
            onClick={addStep}
            disabled={!newStep.action.trim()}
          >
            + Añadir Paso
          </button>
        </div>
      </div>
      
      <button 
        onClick={handleSave} 
        disabled={!selectedAnimal || steps.length === 0}
        className="save-btn"
      >
        Guardar Tratamiento
      </button>
    </div>
  );
};

export default TreatmentEditor;