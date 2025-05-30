class AnimalFlyweight {
  constructor(species, breed) {
    this.species = species;
    this.breed = breed;
  }

  getIntrinsicData() {
    return { species: this.species, breed: this.breed };
  }
}

class AnimalFlyweightFactory {
  constructor() {
    this.flyweights = {};
  }

  getFlyweight(species, breed) {
    const key = `${species}:${breed}`;
    if (!this.flyweights[key]) {
      this.flyweights[key] = new AnimalFlyweight(species, breed);
    }
    return this.flyweights[key];
  }

  getCount() {
    return Object.keys(this.flyweights).length;
  }
}

class AnimalContext {
  constructor(flyweight, symptoms = [], vaccinationProtocols = []) {
    this.flyweight = flyweight;
    this.symptoms = symptoms;
    this.vaccinationProtocols = vaccinationProtocols;
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

export { AnimalFlyweightFactory, AnimalContext };
