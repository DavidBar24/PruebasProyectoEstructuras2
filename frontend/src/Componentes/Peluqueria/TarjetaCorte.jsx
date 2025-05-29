import { Calendar, Star } from "lucide-react";
import DecoratorPeluqueria from "../../PatronesDiseño/DecoratorPeluqueria"

const TarjetaCorte = ({ corte }) => (
  <article className={`tarjeta ${corte.destacado ? 'destacada' : ''}`}>
    {corte.destacado && <div className="badge"><Star size={16}/> Popular</div>}
    <img src={`/cortes/${corte.imagen}`} alt={corte.nombre} />
    <h3>{corte.nombre}</h3>
    <p>${corte.precio}</p>
    <button className="btn-agendar">
      <Calendar size={18}/>
      <DecoratorPeluqueria corte={corte} />
    </button>
  </article>
);

export default TarjetaCorte;

/*
lista-cortes
filas-container
cabeceracabecera
fila-cortes
badge
btn-agendar
pagina-peluqueria
selector-tipo"

btn-tipo

seccion-principal




*/