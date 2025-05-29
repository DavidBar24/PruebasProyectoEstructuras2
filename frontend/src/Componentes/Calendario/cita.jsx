
const Cita = ({ citaData, onSubmit, onChange }) => {
    return (
        <div className="form-container">
            <h2>Agendar Cita</h2>
            <form onSubmit={onSubmit}>
                <label>Fecha y Hora:</label>
                <input
                    type="datetime-local"
                    name="fechaHora"
                    value={citaData.fechaHora}
                    onChange={onChange}
                    required
                />
                
                <label>Motivo:</label>
                <input
                    type="text"
                    name="motivo"
                    value={citaData.motivo}
                    onChange={onChange}
                    required
                />
                
                <label>ID Cliente:</label>
                <input
                    type="number"
                    name="idCliente"
                    value={citaData.idCliente}
                    onChange={onChange}
                    required
                />
                
                <label>ID Mascota:</label>
                <input
                    type="number"
                    name="idMascota"
                    value={citaData.idMascota}
                    onChange={onChange}
                    required
                />
                
                <button type="submit">Agendar</button>
            </form>
        </div>
    );
};

export default Cita;