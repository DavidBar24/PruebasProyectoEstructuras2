// FlyweightAnimalManager.js
// Implementación del patrón Flyweight para gestión de Razas y Especies,
// Síntomas Comunes y Protocolos de Vacunación.

// Clase Flyweight que almacena el estado intrínseco (species y breed)
class AnimalFlyweight {
  constructor(species, breed) {
    this.species = species;
    this.breed = breed;
  }

  // Métodos para mostrar datos intrínsecos
  getIntrinsicData() {
    return { species: this.species, breed: this.breed };
  }
}

// Factory de Flyweights para reutilizar instancias por species+breed
class AnimalFlyweightFactory {
  constructor() {
    this.flyweights = {};
  }

  // Devuelve un Flyweight existente o crea uno nuevo
  getFlyweight(species, breed) {
    const key = `${species}:${breed}`;
    if (!this.flyweights[key]) {
      this.flyweights[key] = new AnimalFlyweight(species, breed);
    }
    return this.flyweights[key];
  }

  // Opcional: muestra cuántos flyweights hay creados
  getCount() {
    return Object.keys(this.flyweights).length;
  }
}

// Gestor de datos extrínsecos: síntomas y protocolos de vacunación
class AnimalContext {
  constructor(flyweight, symptoms = [], vaccinationProtocols = []) {
    this.flyweight = flyweight;
    this.symptoms = symptoms;                       // Array de strings
    this.vaccinationProtocols = vaccinationProtocols; // Array de strings
  }

  addSymptom(symptom) {
    if (!this.symptoms.includes(symptom)) {
      this.symptoms.push(symptom);
    }
  }

  addVaccinationProtocol(protocol) {
    if (!this.vaccinationProtocols.includes(protocol)) {
      this.vaccinationProtocols.push(protocol);
    }
  }

  getFullReport() {
    const intrinsic = this.flyweight.getIntrinsicData();
    return {
      species: intrinsic.species,
      breed: intrinsic.breed,
      commonSymptoms: this.symptoms,
      vaccinationProtocols: this.vaccinationProtocols,
    };
  }
}

// Ejemplo de uso
// const factory = new AnimalFlyweightFactory();
// const labradorFly = factory.getFlyweight('Canine', 'Labrador');
// const context1 = new AnimalContext(labradorFly, ['Obesidad'], ['Vacuna A, Vacuna B']);
// context1.addSymptom('Dermatitis');
// context1.addVaccinationProtocol('Vacuna C');
// console.log(context1.getFullReport());
// console.log('Total Flyweights creados:', factory.getCount());

export { AnimalFlyweightFactory, AnimalContext };
