export default class PerfilModel {
  constructor() {
    this.servicios = [];
    this.beneficios = [];
    this.costo = 0;
    this.nombre = "";
  }

  agregarServicio(servicio) {
    this.servicios.push(servicio);
    this.costo += servicio.costo;
  }

  agregarBeneficio(beneficio) {
    this.beneficios.push(beneficio);
  }

  setNombre(nombre) {
    this.nombre = nombre;
  }

  reset() {
    this.servicios = [];
    this.beneficios = [];
    this.costo = 0;
    this.nombre = "";
  }
}