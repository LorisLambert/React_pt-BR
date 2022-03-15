// COMPONENTE COM COMUNICAÇÃO DIRETA DE PAI PRA FILHO

import React from 'react'
import Filho from './Filho'

export default props =>
    <div>
        <h3>Lista de nomes dos filhos do Sr.Kakashi</h3>
        <Filho Sobrenome='Kakashi'>Naruto</Filho> {/* Linha de código referência */}
        <Filho Sobrenome={props.Sobrenome}>Sasuke</Filho> {/* Outra forma de escrever a linha de código referência - OBS.: para conseguir usar ela é necessário passar o parãmetro do App.js pra cá */}
        <Filho {...props}>Sakura</Filho> {/* Outra forma de escrever a linha de código referência - OBS.: para conseguir usar ela é necessário passar o parãmetro do App.js pra cá */}
    </div>