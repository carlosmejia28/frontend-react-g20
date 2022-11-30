import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { deletePacienteById, findPacienteByID, savePaciente } from "../server/Server";

function PacienteDetalle() {
  const { id } = useParams();
  const [paciente, setPaciente] = useState({})

  const [disabled, setDisabled] = useState(true);
  function handleGameClick() {
    setDisabled(!disabled);
  }

  const navigate = useNavigate();
  const returnToPacientes = () => {
    navigate("/pacientes");
  }


  useEffect(() => {
    const getPaciente = async () => {
      const data = await findPacienteByID(id);
      setPaciente(data);
    };
    getPaciente();
  }, [id]);

  async function peticionDelete(id) {
    let result = window.confirm("Seguro de Eliminar");
    if (result) {
      const res = await deletePacienteById(id);
      alert(res);
      navigate("/pacientes");

    }
  }

  async function guardarPaciente() {
    const paciente=
    {nombre:"miguel",
    apellido:"segundo",
    fnacimiento:"1999-01-29",
    alergias:["naproxeno","ibuprofeno"],
    ubicacion:{departamento:"cesar",ciudad:"valledupar",direccion:"calle 23 #2-34"}}
    const res = await savePaciente(paciente);
    alert(res);
    navigate("/pacientes");

    
  }




  return (
    <Container>

      <Row className="my-5">
        <Form.Label>Id</Form.Label>
        <Col><Form.Control defaultValue={paciente.id} disabled /></Col>
        <Col md="auto"></Col>
        <Col xs lg="2"><Button variant="danger" type="button" onClick={()=>peticionDelete(paciente.id)}>Eliminar</Button></Col>
      </Row>

      <Form className="mt-5">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="nombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control defaultValue={paciente.nombre} disabled={disabled} />
          </Form.Group>

          <Form.Group as={Col} controlId="apellido">
            <Form.Label>Apellido</Form.Label>
            <Form.Control defaultValue={paciente.apellido} disabled={disabled}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="numeroDocumento">
            <Form.Label># Documento</Form.Label>
            <Form.Control defaultValue={paciente.ndocumento} disabled={disabled}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="numeroDocumento">
            <Form.Label>Tipo Documento</Form.Label>
            <Form.Select defaultValue={paciente.tdocumento} disabled={disabled}
            >
              <option>{paciente.tdocumento}</option>
              <option>CC</option>
              <option>TI</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="depa">
            <Form.Label>Departamento</Form.Label>
            <Form.Control value={paciente.ubicacion !== undefined ? paciente.ubicacion.departamento : "undefined"} disabled={disabled}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="ciudad">
            <Form.Label>Ciudad</Form.Label>
            <Form.Control value={paciente.ubicacion !== undefined ? paciente.ubicacion.ciudad : "undefined"} disabled={disabled}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="direccion">
            <Form.Label>Direccion</Form.Label>
            <Form.Control value={paciente.ubicacion !== undefined ? paciente.ubicacion.direccion : "undefined"} disabled={disabled}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>F. Nacimiento</Form.Label>
            <Form.Control defaultValue={paciente.fnacimiento} disabled={disabled}
            />
          </Form.Group>
          <Form.Group as={Col} >
            <Form.Label>Alergias</Form.Label>
            <textarea className="form-control" defaultValue={paciente.alergias} disabled={disabled}
              id="exampleFormControlTextarea1" rows="3"></textarea>
          </Form.Group>
        </Row>
      </Form>

      <Row>
        <Col><Button variant="primary" type="button" onClick={returnToPacientes}>Volver</Button></Col>
        <Col md="auto"><Button variant="warning" type="success" onClick={guardarPaciente}>Editar</Button></Col>
        <Col xs lg="2"><Button variant="warning" type="button" onClick={handleGameClick}>Editar</Button></Col>
      </Row>

    </Container>
  )

}
export { PacienteDetalle }