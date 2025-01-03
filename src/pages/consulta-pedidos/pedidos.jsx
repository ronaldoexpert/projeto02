/*
CONSULTA DE PEDIDOS



*/

import { useEffect, useState } from "react";

function ConsultaPedidos(){    
    const [pedidos, setPedidos] = useState([]);

    function getPedidos(){
        setPedidos([
                {id_pedido: 1000, cliente: "Amazon Brasil", status: "Entregue", total: 4500},
                {id_pedido: 1582, cliente: "Microsoft", status: "Enviado", total: 12700},
                {id_pedido: 1729, cliente: "Walmart", status: "Em Aberto", total: 2530.25}
            ]);
    }

    useEffect(() => {
        getPedidos();
    }, []);


    return <div>
        <h1>Consulta de Pedidos</h1>

        {
            pedidos.map((pedido) => {
                return <div key={pedido.id_pedido}>
                        <span>{pedido.id_pedido} | </span>
                        <span>{pedido.cliente} | </span>
                        <span>{pedido.status} | </span>
                        <span>{pedido.total}</span>
                 </div>
            })
        }
    </div>
}

export default ConsultaPedidos;