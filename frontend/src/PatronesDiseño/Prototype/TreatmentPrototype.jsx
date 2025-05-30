export default class TreatmentPrototype {
  constructor(name, steps = [], medications = []) {
    this.name = name;
    this.steps = steps;        
    this.medications = medications; 
    this.owner = "Clínica Veterinaria"; 
  }

  clone(customName = "") {
    const clonedSteps = JSON.parse(JSON.stringify(this.steps));
    const clonedMeds = JSON.parse(JSON.stringify(this.medications));
    
    return new TreatmentPrototype(
      customName || `${this.name} (Copia)`,
      clonedSteps,
      clonedMeds
    );
  }

  applyToAnimal(animalId, customizations = {}) {
    const treatment = this.clone(customizations.name || `Tratamiento para ${animalId}`);
    
    if (customizations.steps) {
      treatment.steps = [...treatment.steps, ...customizations.steps];
    }
    
    if (customizations.medications) {
      treatment.medications = treatment.medications.map(med => {
        return {...med, ...customizations.medications[med.name]};
      });
    }
    
    return treatment;
  }
}