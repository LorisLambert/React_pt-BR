// COMPONENTES COM ELEMENTOS RENDERIZADOS A PARTIR DE UMA LISTA DE DADOS

import React from 'react'

import Dados from './Dados'

export default propos =>{
    function getDadosLista(){
        return Dados.map(dado => {
        return <li key={dado.id}>{dado.cor}</li>
        })
    }
    return(
        <div>
            <h3>Cores Primárias</h3>
            <ul>
                {getDadosLista()}
            </ul>
        </div>
    )
}