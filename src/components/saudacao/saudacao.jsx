import "./saudacao.css";

function Saudacao(props){
  let texto;
  if (props.nome){
      texto = <h1>Olá {props.nome}!</h1>
  }else{
      texto = <h1>Bom dia</h1>
  }
  return <div>
            {texto}
         </div>  
}

export default Saudacao;