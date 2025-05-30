import { useState } from 'react';
import EstadoFactory from '../Contenedores/CalculadoraComida/estados/EstadoFactory';

export const useCalculadoraComida = () => {
  const [species, setSpecies] = useState('dog');
  const [weight, setWeight] = useState('');
  const [unit, setUnit] = useState('kg');
  const [activityLevel, setActivityLevel] = useState('medium');
  const [foodType, setFoodType] = useState('dry');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const calcularPorcion = (calorias) => {
    const kcalPerGram = { 
      dry: 3.5, wet: 1.2, barf: 1.0 
    };
    return Math.round(calorias / kcalPerGram[foodType]);
  };

  const validarInputs = () => {
    if (!weight || isNaN(weight) || weight <= 0) {
      setError(" Ingrese un peso válido");
      return false;
    }
    setError('');
    return true;
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    if (!validarInputs()) return;
    
    try {
      const estado = EstadoFactory.crearEstado(species);
      const pesoKg = unit === 'kg' ? parseFloat(weight) : parseFloat(weight) * 0.453592;
      const calorias = estado.calcularCalorias(pesoKg, activityLevel);
      
      setResult({
        calories: Math.round(calorias),
        portion: calcularPorcion(calorias),
        foodType
      });
    } catch (err) {
      setError(err.message);
    }
  };

  return {
    species,
    setSpecies,
    weight,
    setWeight,
    unit,
    setUnit,
    activityLevel,
    setActivityLevel,
    foodType,
    setFoodType,
    result,
    error,
    handleCalculate
  };
};