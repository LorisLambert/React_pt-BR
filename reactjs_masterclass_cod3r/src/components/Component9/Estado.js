// COMPONENTE COM COMUNICAÇÃO INDIRETA, HOOKS E ESTADO

import React, {useState} from 'react'
import Action from './Action'

export default (props) =>{
    /* Nessa constante estamos usando um operador chamado destructuring do javascript */
    const [num, setNum] = useState()              
    /* Para saber mais sobre ele, consulte a documentação: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment */
    function resposta(valor){
       setNum(valor)
    }
    return(
        <div>
            <h3>Qual é a resposta para a soma a seguir?</h3>
            <h3>4 + 4 = {num}</h3>
            <Action onClick={resposta}></Action>
        </div>
    );
};
    