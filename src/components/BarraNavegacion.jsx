import React from "react";
import { NavDropdown } from "react-bootstrap";
import { Link, NavLink} from "react-router-dom";

function BarraNavegacion() {
    return(
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">Inicio</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/contact">Contacto</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/pacientes">Pacientes</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="#">Pricing</NavLink>
        </li>

        <NavDropdown  id="nav-dropdown-dark-example" title="Dropdown">
            <NavDropdown.Item><Link to="/" className="nav-link">Contacto</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to="/" className="nav-link">Contacto</Link></NavDropdown.Item>
        </NavDropdown>
      
     
      </ul>
    </div>
  </div>
</nav>

    )
    
}
export {BarraNavegacion}