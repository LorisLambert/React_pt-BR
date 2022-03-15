// COMPONENTE CARD COM DOIS PARÂMETROS, UM REPAPASSADO AO SEU COMPONENETE FILHO E UM QUE ELE TOMA PARA SI
// Como saber se é um component ou um container? Container geralmente são páginas da sua aplicação, portanto um component com muitos outros components dentro dele

import './Card.css'
import React from 'react'

export default props =>
    <div className = 'Card' style={{borderColor: props.color || '#61dafb'}}> {/* Lembrar que no JSX não usamos class, usamos className! */}
        <div className = 'Conteudo'> {/* Lembrar que no JSX não usamos class, usamos className! */}
            {props.children}
        </div>
        <div className = 'Rodape' style={{backgroundColor: props.color || '#61dafb'}}> {/* Lembrar que no JSX não usamos class, usamos className! */}
            {props.tipo}
        </div>
    </div>