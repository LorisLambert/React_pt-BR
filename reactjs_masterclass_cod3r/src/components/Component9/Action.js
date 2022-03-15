import React from 'react'

export default (props) => {
    /* Para enviar dados de volta, usamos uma função chamada callback */
    function soma(){
        props.onClick(8)
    }
    /* Para saber mais, consulte a documentação: https://developer.mozilla.org/pt-BR/docs/Glossario/Callback_function */
    return(
        <div>
            <button onClick={soma}>Calcular</button>
        </div>
    )
};