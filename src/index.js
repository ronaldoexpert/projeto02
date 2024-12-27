import React from 'react';
import ReactDOM from 'react-dom/client';
import Cliente from './components/cliente/cliente';

const clientes = [
    {nome:"Ronaldo", cidade:"Mar de Espanha"},
    {nome:"Mazu", cidade:"Juiz de Fora"},
    {nome:"Raquel", cidade:"Santo Antonio do Aventureiro"},
    {nome:"Vania", cidade:"Mar de Espanha"}
  ];


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <h1>Lista de Clientes</h1>

    {
      clientes.map((cli) =>{
        return <Cliente key={cli.nome} 
                        nome={cli.nome} 
                        cidade={cli.cidade} />
      })
    }
    
  </>
);
