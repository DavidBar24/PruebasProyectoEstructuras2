import EstadoCalculadora from './EstadoCalculadora';

export default class EstadoPerro extends EstadoCalculadora {
  calcularCalorias(peso, actividad) {
    const baseCalories = 70 * Math.pow(peso, 0.75);
    const multiplier = { low: 1.2, medium: 1.5, high: 1.8 }[actividad];
    return baseCalories * multiplier;
  }
}