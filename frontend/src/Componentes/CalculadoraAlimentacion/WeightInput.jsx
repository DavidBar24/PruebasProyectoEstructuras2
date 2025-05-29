export const WeightInput = ({ weight, unit, onWeightChange, onUnitChange }) => (
  <div className="input-group">
    <label>Peso:</label>
    <input
      type="number"
      value={weight}
      onChange={(e) => onWeightChange(e.target.value)}
      min="0.5"
      step="0.1"
      placeholder="Ej: 5.2"
    />
    <select 
      value={unit} 
      onChange={(e) => onUnitChange(e.target.value)}
      className="unit-select"
    >
      <option value="kg">kg</option>
      <option value="lbs">lbs</option>
    </select>
  </div>
);