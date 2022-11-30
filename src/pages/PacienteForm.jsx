import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function PacienteForm() {

    const navigate = useNavigate();

    const returnToPacientes = () => {
        navigate("/pacientes");}

        const [paciente, setPaciente] = useState(
            {
                nombre: "",
                apellido: "",
                fnacimiento: "",
                alergias: [],
                ubicacion: {
                    departamento: "",
                    ciudad: "",
                    direccion: ""
                }
            }
        );

        function handleChange({target}) {
            setPaciente({
                ...paciente,
                [target.name]:target.value
            });
            console.log(paciente)
        }

    return (
        <Form className="mt-5">
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
                        <option></option>
                        <option>CC</option>
                        <option>TI</option>
                    </Form.Select>
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="depa">
                    <Form.Label>Departamento</Form.Label>
                    <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="ciudad">
                    <Form.Label>Ciudad</Form.Label>
                    <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="direccion">
                    <Form.Label>Direccion</Form.Label>
                    <Form.Control />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col}>
                    <Form.Label>F. Nacimiento</Form.Label>
                    <Form.Control />
                </Form.Group>
                <Form.Group as={Col} >
                    <Form.Label>Alergias</Form.Label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </Form.Group>
            </Row>
            <Button variant="primary" type="button" onClick={returnToPacientes}>
                Volver
            </Button>
        </Form>


    )

}
export { PacienteForm }