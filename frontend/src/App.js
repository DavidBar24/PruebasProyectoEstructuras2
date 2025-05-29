//App.js
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CalendarioCitas from "./Contenedores/CalendarioCitas/calendarioCitas";
import ContenedorInfoMascotas from "./Contenedores/contenedorInfoMascotas/contenedorInfoMascotas";
import { LoginPagina } from "./paginas/LoginPagina";
import Peluqueria from "./paginas/Peluqueria";
import RegistrarMascota from "./paginas/RegistrarMascota";
import RegistroPagina from "./paginas/RegistroPagina";
import DesparasitaryVacunar from "./paginas/DesparaYVacunaPagina";
import LinkedListComponent from "./servicios/LinkedListComponent";


import Veterinaria from "./veterinaria";
function App() {


  
  return (
    <Router>
      
      
      <Routes>
        <Route path="/" element={<LoginPagina />} />
        <Route path="/register" element={<RegistroPagina />} />
        <Route path="/veterinaria" element={<Veterinaria />} />
     
        <Route path = "/Registrar-Mascota" element={<RegistrarMascota/>}/>
        <Route path="/desparasitacion-vacunacion" element={<DesparasitaryVacunar/>}/>
        <Route path="/peluqueria-estetica" element={<Peluqueria/>}/>
        <Route path="/agendar-Cita" element={<CalendarioCitas />} />
        <Route path="/galeria" element={<LinkedListComponent />} />
        
         
        <Route path="/mascotas-usuario/:idUsuario" element={<ContenedorInfoMascotas />} />

      </Routes>
    </Router>
      

  );
  
  
}

export default App;
