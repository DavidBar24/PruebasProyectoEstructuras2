/* eslint-disable import/no-anonymous-default-export */
import TreatmentPrototype from './TreatmentPrototype';

export default [
  new TreatmentPrototype(
    "Tratamiento para Parvovirus Canino",
    [
      { step: 1, action: "Fluidoterapia intravenosa", duration: "48-72 horas" },
      { step: 2, action: "Antibiótico (Amoxicilina)", duration: "7 días" },
      { step: 3, action: "Antiemético para control de vómitos", duration: "5 días" }
    ],
    [
      { name: "Suero fisiológico", dosage: "50ml/kg/día" },
      { name: "Amoxicilina", dosage: "20mg/kg cada 12h" },
      { name: "Maropitant", dosage: "1mg/kg cada 24h" }
    ]
  ),
  new TreatmentPrototype(
    "Protocolo de Desparasitación Estándar",
    [
      { step: 1, action: "Administración oral del antiparasitario", duration: "Inmediato" },
      { step: 2, action: "Control coprológico", duration: "A los 7 días" }
    ],
    [
      { name: "Praziquantel", dosage: "5mg/kg dosis única" },
      { name: "Febendazol", dosage: "50mg/kg por 3 días" }
    ]
  ),
  new TreatmentPrototype(
    "Tratamiento de Dermatitis Alérgica",
    [
      { step: 1, action: "Baño terapéutico con champú medicado", duration: "2 veces por semana" },
      { step: 2, action: "Control de pulgas y garrapatas", duration: "Continuo" }
    ],
    [
      { name: "Prednisolona", dosage: "0.5mg/kg cada 24h" },
      { name: "Oclacitinib", dosage: "0.6mg/kg cada 12h" }
    ]
  )
];