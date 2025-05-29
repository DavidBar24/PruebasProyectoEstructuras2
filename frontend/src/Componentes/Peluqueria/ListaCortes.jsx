import TarjetaCorte from './TarjetaCorte';

const ListaCortes = ({ cortes }) => (
  <div className="lista-cortes">
    {cortes.map((corte, index) => (
      <TarjetaCorte key={index} corte={corte} />
    ))}
  </div>
);

export default ListaCortes;