import { ActivityRadio } from '../../Componentes/CalculadoraAlimentacion/ActivityRadio';
import { ResultCard } from '../../Componentes/CalculadoraAlimentacion/ResultCard';
import { SpeciesSelector } from '../../Componentes/CalculadoraAlimentacion/SpeciesSelector';
import { WeightInput } from '../../Componentes/CalculadoraAlimentacion/WeightInput';
import { useCalculadoraComida } from '../../Hooks/useCalculadoraComida';

export const CalculadoraPrincipal = () => {
  const {
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
  } = useCalculadoraComida();

  return (
    <div className="calculadora-container">
      <h1>🍖 Calculadora de Alimentación</h1>
      <form onSubmit={handleCalculate}>
        <SpeciesSelector species={species} onChange={setSpecies} />
        <WeightInput 
          weight={weight}
          unit={unit}
          onWeightChange={setWeight}
          onUnitChange={setUnit}
        />
        <ActivityRadio activityLevel={activityLevel} onChange={setActivityLevel} />
        
        <div className="input-group">
          <label>Tipo de alimento:</label>
          <select value={foodType} onChange={(e) => setFoodType(e.target.value)}>
            <option value="dry">Seco</option>
            <option value="wet">Húmedo</option>
            <option value="barf">BARF</option>
          </select>
        </div>

        {error && <div className="error-message">{error}</div>}
        <button type="submit">Calcular</button>
      </form>
      
      <ResultCard result={result} />
    </div>
  );
};