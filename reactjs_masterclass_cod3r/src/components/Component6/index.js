// COMPONENT DE CONDIÇÃO COM IF - OBS.: dessa forma, é possível identificar se não é número

import React from 'react'
import If from './If'

export default props =>{
    return(
        <div>
            <h3>O número {props.valor} é:</h3>
            <If test={props.valor%2 === 0}>
                <span>Par</span>
            </If>
            <If test={props.valor%2 === 1}>
                <span>Ímpar</span>
            </If>
        </div>
    )
}
