import { useState } from 'react';

const AnimalSelector = ({ 
  animals, 
  onSelect, 
  onAddNew,
  selectedAnimalId = null 
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [newAnimal, setNewAnimal] = useState({
    name: '',
    species: '',
    breed: '',
    age: '',
    owner: ''
  });


  const filteredAnimals = animals.filter(animal => 
    animal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    animal.breed.toLowerCase().includes(searchTerm.toLowerCase())
  );


  const handleNewAnimalChange = (e) => {
    const { name, value } = e.target;
    setNewAnimal(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitNewAnimal = (e) => {
    e.preventDefault();
    if (!newAnimal.name.trim()) return;
    
    onAddNew({
      ...newAnimal,
      id: `new-${Date.now()}`, // ID temporal
      age: newAnimal.age ? parseInt(newAnimal.age) : null
    });
    

    setNewAnimal({ name: '', species: '', breed: '', age: '', owner: '' });
    setShowAddForm(false);
  };

  return (
    <div className="animal-selector">
      <div className="selector-header">
        <h3>Seleccionar Mascota</h3>
        
        <div className="search-container">
          <input
            type="text"
            placeholder="Buscar mascota o raza..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button 
            className="toggle-add-btn"
            onClick={() => setShowAddForm(!showAddForm)}
          >
            {showAddForm ? 'Cancelar' : '+ Nueva Mascota'}
          </button>
        </div>
      </div>

      {showAddForm && (
        <div className="add-animal-form">
          <h4>Registrar Nueva Mascota</h4>
          <form onSubmit={handleSubmitNewAnimal}>
            <div className="form-group">
              <label>Nombre:</label>
              <input
                type="text"
                name="name"
                value={newAnimal.name}
                onChange={handleNewAnimalChange}
                required
              />
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>Especie:</label>
                <select 
                  name="species" 
                  value={newAnimal.species}
                  onChange={handleNewAnimalChange}
                  required
                >
                  <option value="">Seleccionar</option>
                  <option value="Perro">Perro</option>
                  <option value="Gato">Gato</option>
                  <option value="Ave">Ave</option>
                  <option value="Roedor">Roedor</option>
                  <option value="Reptil">Reptil</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>
              
              <div className="form-group">
                <label>Raza:</label>
                <input
                  type="text"
                  name="breed"
                  value={newAnimal.breed}
                  onChange={handleNewAnimalChange}
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>Edad (años):</label>
                <input
                  type="number"
                  name="age"
                  min="0"
                  max="30"
                  value={newAnimal.age}
                  onChange={handleNewAnimalChange}
                />
              </div>
              
              <div className="form-group">
                <label>Dueño:</label>
                <input
                  type="text"
                  name="owner"
                  value={newAnimal.owner}
                  onChange={handleNewAnimalChange}
                />
              </div>
            </div>
            
            <button type="submit">Guardar Mascota</button>
          </form>
        </div>
      )}

      <div className="animals-list">
        {filteredAnimals.length === 0 ? (
          <div className="no-results">
            {searchTerm ? 
              `No se encontraron mascotas para "${searchTerm}"` : 
              'No hay mascotas registradas'
            }
          </div>
        ) : (
          filteredAnimals.map(animal => (
            <div 
              key={animal.id}
              className={`animal-card ${selectedAnimalId === animal.id ? 'selected' : ''}`}
              onClick={() => onSelect(animal.id)}
            >
              <div className="animal-info">
                <h4>{animal.name}</h4>
                <p>{animal.species} • {animal.breed || 'Raza no especificada'}</p>
                {animal.age && <p>Edad: {animal.age} años</p>}
                {animal.owner && <p>Dueño: {animal.owner}</p>}
              </div>
              <div className="animal-status">
                {animal.vaccinated && <span className="badge vaccinated">Vacunado</span>}
                {animal.neutered && <span className="badge neutered">Esterilizado</span>}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AnimalSelector;