import EstadoCalculadora from './EstadoCalculadora';

export default class EstadoGato extends EstadoCalculadora {
  calcularCalorias(peso, actividad) {
    const baseCalories = 40 * peso;
    const multiplier = { low: 1.0, medium: 1.2, high: 1.4 }[actividad];
    return baseCalories * multiplier;
  }
}