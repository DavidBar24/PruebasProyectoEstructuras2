import CabeceraPeluqueria from '../Componentes/Peluqueria/CabeceraPeluqueria';
import { useSeleccionMascota } from '../Componentes/Peluqueria/SelectorTipoMascota';
import ContenedorFilasCortes from '../Contenedores/contenedorPeluqueria/ContenedorFilasCortes';
import { EstrategiasCorte } from '../PatronesDiseño/estrategiasCorte';
import "../Styles/peluqueria.css";
const Peluqueria = () => {
  const { tipoMascota, setTipoMascota, estrategia, tipos } = useSeleccionMascota();

  return (
    <div className="pagina-peluqueria">
      <CabeceraPeluqueria 
        titulo="Peluquería Profesional" 
        subtitulo={estrategia.getTipo()} 
      />

      <div className="selector-tipo">
        {tipos.map(tipo => (
          <button
            key={tipo}
            className={`btn-tipo ${tipoMascota === tipo ? 'activo' : ''}`}
            onClick={() => setTipoMascota(tipo)}
          >
            {EstrategiasCorte[tipo].getIcono()}
            {EstrategiasCorte[tipo].getTipo()}
          </button>
        ))}
      </div>

      <section className="seccion-principal">
        <h2>{estrategia.getDescripcion()}</h2>
        <ContenedorFilasCortes cortes={estrategia.getCortes()} />
      </section>
    </div>
  );
};

export default Peluqueria;