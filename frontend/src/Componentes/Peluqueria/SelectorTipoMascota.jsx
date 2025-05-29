import { useState } from 'react';
import { EstrategiasCorte } from '../../PatronesDiseño/estrategiasCorte';

export const useSeleccionMascota = () => {
  const [tipoMascota, setTipoMascota] = useState("canina");
  return {
    tipoMascota,
    setTipoMascota,
    estrategia: EstrategiasCorte[tipoMascota],
    tipos: Object.keys(EstrategiasCorte)
  };
};