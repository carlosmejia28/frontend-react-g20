const API_URL="http://localhost:8080/pacientes/";
export async function loadPacientes() {
    const res = await fetch(API_URL);
    return await res.json();
    
   }

export async function findPacienteByID(id){
    const options = {method: 'GET'}; //cuando es metodo GET no es necesario especificarlo
    const res= await fetch(API_URL+id,options);
    return await res.json();
}

export async function deletePacienteById(id){
    const options = {method: 'DELETE'}; //cuando es metodo GET no es necesario especificarlo
    const res= await fetch(API_URL+id,options);
    const text =await res.text();
    return text;
    
}

export async function savePaciente(paciente){

    const options = {
        method: 'POST',
        headers:{"Content-type":"application/json"},
        body: JSON.stringify(paciente)
      };
      
      const response = await fetch(API_URL, options);
      return await response.text();    
}