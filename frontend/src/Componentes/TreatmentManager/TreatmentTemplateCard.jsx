
const TreatmentTemplateCard = ({ template, onClone, onApply }) => {
  return (
    <div className="template-card">
      <h3>{template.name}</h3>
      
      <div className="template-details">
        <h4>Pasos:</h4>
        <ol>
          {template.steps.map((step, i) => (
            <li key={i}>
              <strong>Paso {step.step}:</strong> {step.action} 
              <span>({step.duration})</span>
            </li>
          ))}
        </ol>
        
        <h4>Medicamentos:</h4>
        <ul>
          {template.medications.map((med, i) => (
            <li key={i}>
              {med.name} - {med.dosage}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="template-actions">
        <button onClick={() => onClone(template)}>Clonar Plantilla</button>
        <button onClick={() => onApply(template)}>Aplicar a Mascota</button>
      </div>
    </div>
  );
};

export default TreatmentTemplateCard;