import TarjetaCorte from "../../Componentes/Peluqueria/TarjetaCorte";

const ContenedorFilasCortes = ({ cortes }) => {
  const handleAgendar = (corte) => {
    alert(`¡Has agendado el corte: ${corte.nombre} por $${corte.precio}!`);
  };

  return (
    <div className="filas-container">
      <div className="fila-cortes">
        {cortes.map((corte, index) => (
          <TarjetaCorte key={index} corte={corte} onAgendar={handleAgendar} />
        ))}
      </div>
    </div>
  );
};

export default ContenedorFilasCortes;