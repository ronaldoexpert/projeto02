import { useEffect, useState } from "react";
import Cliente from "../../components/cliente/cliente.jsx";

function ConsultaClientes(){   
    const [clientes, setClientes] = useState([]);
    
    function getClientes(){
        setClientes([
            {nome:"Ronaldo", cidade:"Mar de Espanha"},
            {nome:"Mazu", cidade:"Juiz de Fora"},
            {nome:"Raquel", cidade:"Santo Antonio do Aventureiro"},
            {nome:"Vania", cidade:"Mar de Espanha"}]);
    }
    
    useEffect(() => {
        getClientes();
    }, [])
    
    return <>
        <h1>Lista de Clientes</h1>

        {
            clientes.map((cli) =>{
                return <Cliente key={cli.nome} 
                                nome={cli.nome} 
                                cidade={cli.cidade} />
            })
        }
    </>
}

export default ConsultaClientes;
