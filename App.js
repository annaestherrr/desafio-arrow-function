import React, {Component} from 'react' 

class Desafio extends Component{
 mensagem = () => {
   return "Olá, essa é a mensagem!";
 };
 calculadobro = (x) => {
  return x * 2;
};
render() {
  return (
    <div>
      <h1>{this.mensagem()}</h1>
      <h2>O dobro do número é: {this.calculadobro(5)}.</h2>
    </div>
  )
}
}


export default Desafio