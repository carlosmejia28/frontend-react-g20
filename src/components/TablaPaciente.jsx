import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deletePacienteById, loadPacientes } from "../server/Server"

function TablaPaciente() {
    const [listaPacientes, setListaPacientes] = useState([])

    async function listPacientes() {
        try {
            const res = await loadPacientes();
            setListaPacientes(res);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        listPacientes();
    }, [setListaPacientes]);

    async function peticionDelete(id) {
        let result = window.confirm("Seguro de Eliminar");
        if (result) {
            const res = await deletePacienteById(id);
        alert(res);
        setListaPacientes(listaPacientes.filter(paciente=>paciente.id!==id))
        }
    }
    let contador = 0;
    return (

        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>F. Nacimiento</th>
                    <th>Ciudad</th>
                    <th>Detalle</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody>
                {
                    
                    listaPacientes.map((paciente) => (
                        <tr key={paciente.id}>
                            <td>{++contador}</td>
                            <td>{paciente.nombre}</td>
                            <td>{paciente.apellido}</td>
                            <td>{paciente.fnacimiento}</td>
                            <td>{paciente.ubicacion.ciudad}</td>
                            <td><Link to={`/pacientes/${paciente.id}`}>ver detalle</Link></td>
                            <td><Button variant="danger" type="submit" onClick={()=>peticionDelete(paciente.id)}>Eliminar</Button></td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>


    )
}
export { TablaPaciente }