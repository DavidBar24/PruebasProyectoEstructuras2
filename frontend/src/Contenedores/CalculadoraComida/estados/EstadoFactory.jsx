import EstadoGato from './EstadoGato';
import EstadoPerro from './EstadoPerro';

export default class EstadoFactory {
  static crearEstado(especie) {
    switch(especie) {
      case 'dog': return new EstadoPerro();
      case 'cat': return new EstadoGato();
      default: throw new Error(`Especie no soportada: ${especie}`);
    }
  }
}