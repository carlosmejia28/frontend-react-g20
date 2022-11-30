import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function HeaderPaciente() {

    return(
       
         
      <Row className="my-3">
        <Col xs={4}><h2>Lista de Pacientes</h2></Col>
        <Col  xs={5}>Second, but last</Col>
        <Col xs> <Link to="/PacienteForm"><Button variant="success">Registrar Paciente</Button></Link></Col>
      </Row>
   


      


    )
    
}
export {HeaderPaciente};