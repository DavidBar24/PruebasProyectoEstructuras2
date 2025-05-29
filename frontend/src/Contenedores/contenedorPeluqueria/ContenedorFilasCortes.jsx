import TarjetaCorte from "../../Componentes/Peluqueria/TarjetaCorte";
const ContenedorFilasCortes = ({ cortes }) => {
    return (
      <div className="filas-container">
        <div className="fila-cortes">
          {cortes.map((corte, index) => (
            <TarjetaCorte key={index} corte={corte} />
          ))}
        </div>
      </div>
    );
  };

export default ContenedorFilasCortes;