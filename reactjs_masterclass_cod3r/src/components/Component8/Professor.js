// COMPONENTE COM COMUNICAÇÃO INDIRETA SEM ESTADO

import React from 'react'
import Aluno from './Aluno'

export default (props) =>{
    function resposta(valor){
        console.log(valor)
        console.log('Não só podem, como é muito provável. A prova disso é o Cristo Redentor, que é atingido cerca de seis vezes por ano, em média, de acordo com o Inpe (Instituto Nacional de Pesquisas Espaciais)')
    }
    return(
        <div>
        <h3>Quiz de Ciências</h3>
        <p>O professor quer saber: os raios podem cair num mesmo lugar? Veja no console se você acertou!</p>
        <Aluno onClick={resposta}></Aluno> {/*  */}
    </div>
    );
};
    