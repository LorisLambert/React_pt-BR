// COMPONENT DE CONDIÇÃO OPERADOR TERNÁRIO

import React from 'react'

export default props =>{
    return(
        <div>
            <h3>O número {props.valor} é:</h3>
            {props.valor%2 === 0 ? <span>Par</span> : <span>Ímpar</span>}
        </div>
    )
}
