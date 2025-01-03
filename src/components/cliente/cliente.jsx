import { useState } from "react";

function Cliente(props){
    const [detalhes, setDestalhes] = useState(false);
    const [textDetalhes, settextDetalhes] = useState("Mais");

    function setDetalhe(){
        setDestalhes(!detalhes);
        detalhes === true ? settextDetalhes("Mais") : settextDetalhes("Menos");
    }

    return <>
        <span>Nome: {props.nome}</span><br />
        <small>Cidade: {props.cidade}</small><br />
        
        <button onClick={setDetalhe}>{textDetalhes} Detalhes</button>

        {detalhes === true ? 
            <>
                <p>Fone: (32) 0000-00000</p>
                <p>Email: teste@gmail.com</p>
                <p>Contato: Pessoa</p> 
            </>
        : null }

        <hr />
    </>
}
  
export default Cliente;