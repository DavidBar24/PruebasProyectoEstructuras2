import { Scissors } from "lucide-react";

const CabeceraPeluqueria = ({ titulo, subtitulo }) => (
  <header className="cabecera">
    <Scissors size={36} />
    <div>
      <h1>{titulo}</h1>
      <p>{subtitulo}</p>
    </div>
  </header>
);

export default CabeceraPeluqueria;