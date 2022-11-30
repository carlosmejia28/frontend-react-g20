import React from "react";
import { HeaderPaciente } from "../components/HeaderPaciente";
import { TablaPaciente } from "../components/TablaPaciente";

function PacientesPage() {

    return(
        <>
         <HeaderPaciente/>
         <TablaPaciente/>
        </>
       
    )
    
}
export {PacientesPage}