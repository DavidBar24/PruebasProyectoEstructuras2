export default class ServicioModel {
  constructor(tipo, nombre, costo) {
    this.tipo = tipo;
    this.nombre = nombre;
    this.costo = costo;
    this.descripcion = "";
  }

  setDescripcion(desc) {
    this.descripcion = desc;
  }
}