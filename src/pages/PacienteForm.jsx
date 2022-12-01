import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { savePaciente } from "../server/Server";

function PacienteForm() {

    const navigate = useNavigate();

    const returnToPacientes = () => {
        navigate("/pacientes");
    }

    const [paciente, setPaciente] = useState(
        {
            nombre: "",
            apellido: "",
            fnacimiento: "",
            alergias: "",
            departamento: "",
            ciudad: "",
            direccion: "",
            ubicacion:""
            
        }
    );
    function handleChange({ target }) {
        setPaciente({
            ...paciente,
            [target.name]: target.value

        });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        paciente.alergias = paciente.alergias.split(" ").join("").split(',');
        paciente.ubicacion={
            departamento:paciente.departamento,
            ciudad:paciente.ciudad,
            direccion:paciente.direccion,
        }
        delete paciente.departamento;
        delete paciente.ciudad;
        delete paciente.direccion;

        const response = await savePaciente(paciente);
        alert(response); 
        returnToPacientes();

    }



    return (
        <Form className="mt-5" onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="nombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        name="nombre"
                        required
                        value={paciente.nombre}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="apellido">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                        type="text"
                        name="apellido"
                        required
                        value={paciente.apellido}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="numeroDocumento">
                    <Form.Label># Documento</Form.Label>
                    <Form.Control />
                </Form.Group>
                <Form.Group as={Col} controlId="numeroDocumento">
                    <Form.Label>Tipo Documento</Form.Label>
                    <Form.Select  >
                        <option>RC</option>
                        <option>CC</option>
                        <option>TI</option>
                    </Form.Select>
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="depa">
                    <Form.Label>Departamento</Form.Label>
                    <Form.Control
                        type="text"
                        name="departamento"
                        required
                        value={paciente.departamento}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="ciudad">
                    <Form.Label>Ciudad</Form.Label>
                    <Form.Control
                        type="text"
                        name="ciudad"
                        required
                        value={paciente.ciudad}
                        onChange={handleChange} />
                </Form.Group>

                <Form.Group as={Col} controlId="direccion">
                    <Form.Label>Direccion</Form.Label>
                    <Form.Control
                        type="text"
                        name="direccion"
                        required
                        value={paciente.direccion}
                        onChange={handleChange} />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col}>
                    <Form.Label>F. Nacimiento</Form.Label>
                    <Form.Control
                        type="text"
                        name="fnacimiento"
                        required
                        value={paciente.fnacimiento}
                        onChange={handleChange} />
                </Form.Group>
                <Form.Group as={Col} >
                    <Form.Label>Alergias</Form.Label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                        type="text"
                        name="alergias"
                        required
                        value={paciente.alergias}
                        onChange={handleChange}
                    ></textarea>

                </Form.Group>

            </Row>

            <Row className="my-3">
                <Col xs={4}><Button variant="primary" type="button" onClick={returnToPacientes}>Volver</Button></Col>
                <Col xs={5}><Button variant="success" type="success">Guardar</Button></Col>
                <Col xs> </Col>
            </Row>
        </Form>


    )

}
export { PacienteForm }