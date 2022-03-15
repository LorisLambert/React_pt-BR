// COMPONENTE COM FILHO

import React from 'react'

export default props =>
    <div>
        <h3>{props.Titulo}</h3>
        <div>
            {props.children} {/* Propriedades sendo atribuidas aos filhos */} 
        </div>
    </div>



