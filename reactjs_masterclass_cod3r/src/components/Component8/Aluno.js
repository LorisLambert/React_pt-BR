// COMPONENTE COM COMUNICAÇÃO INDIRETA SEM ESTADO

import React from 'react'

export default (props) => {
    return(
        <div>
            <div>
                <button onClick={()=>{
                    props.onClick('Certo!')
                }}>Sim</button>
            </div>
            <div>
                <button onClick={()=>{
                    props.onClick('Errado!')
                }}>Não</button>
            </div>
        </div>
    );
};