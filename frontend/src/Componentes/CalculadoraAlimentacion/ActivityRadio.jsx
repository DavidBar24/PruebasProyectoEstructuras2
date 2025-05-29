export const ActivityRadio = ({ activityLevel, onChange }) => (
  <div className="input-group">
    <label>Nivel de actividad:</label>
    <div className="radio-group">
      {['low', 'medium', 'high'].map((level) => (
        <label key={level}>
          <input
            type="radio"
            value={level}
            checked={activityLevel === level}
            onChange={() => onChange(level)}
          />
          {level === 'low' && 'Baja'}
          {level === 'medium' && 'Moderada'}
          {level === 'high' && 'Alta'}
        </label>
      ))}
    </div>
  </div>
);