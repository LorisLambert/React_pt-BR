// COMPONENT DE INPUT E HOOKS

import React, {useState} from 'react'

export default (props) => {
    // A ideia aqui, é que o useSatet retorne um array com dois elementos
    const [country, setCountry] = useState()
    //  O 1º o valor e o 2º a função que altera esse valor
    return(
        <>
            <h3>Complete o trava-língua</h3>
            <p>O rato roeu a roupa do Rei de {country}</p>
            <input type='text' placeholder='cidade' value={country} onChange={
                e => setCountry(e.target.value)
            }/>
        </>
    );
};
