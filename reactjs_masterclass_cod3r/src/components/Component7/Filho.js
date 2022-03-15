// COMPONENTE COM COMUNICAÇÃO DIRETA DE PAI PRA FILHO

import React from 'react'

export default props =>
    <div>
        <p>{props.children} {props.Sobrenome}</p>
    </div>