import { Container } from "react-bootstrap";
import { HashRouter, Route, Routes } from "react-router-dom";
import { BarraNavegacion } from "../components/BarraNavegacion";
import { ContactPage } from "../pages/ContactPage";
import { HomePage } from "../pages/HomePage";
import { NotFound } from "../pages/NotFound";
import { PacienteDetalle } from "../pages/PacienteDetalle";
import { PacienteForm } from "../pages/PacienteForm";
import { PacientesPage } from "../pages/PacientesPage";
function App() {
  return (
    <Container>
      <HashRouter>
    <BarraNavegacion/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
      <Route path="/pacientes" element={<PacientesPage/>}/>
      <Route path="/pacientes/:id" element={<PacienteDetalle/>}/> {/*path variable*/}
      <Route path="/PacienteForm" element={<PacienteForm/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </HashRouter>
    </Container>    
  );
}
export default App;
