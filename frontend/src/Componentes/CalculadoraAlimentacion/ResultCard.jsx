export const ResultCard = ({ result }) => (
  <div className="result-card">
    <h3>📋 Resultado:</h3>
    {result && (
      <>
        <p>Porción diaria: <strong>{result.portion}g</strong></p>
        <p>Tipo de alimento: <strong>{result.foodType.toUpperCase()}</strong></p>
        <p>Calorías/día: <strong>{result.calories} kcal</strong></p>
      </>
    )}
  </div>
);