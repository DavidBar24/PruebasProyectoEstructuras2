export const SpeciesSelector = ({ species, onChange }) => (
  <div className="input-group">
    <label>Especie de la mascota:</label>
    <select 
      value={species} 
      onChange={(e) => onChange(e.target.value)}
      className="species-select"
    >
      <option value="dog">🐶 Perro</option>
      <option value="cat">🐱 Gato</option>
    </select>
  </div>
);