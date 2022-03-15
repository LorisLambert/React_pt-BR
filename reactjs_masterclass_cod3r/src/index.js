// Imports Fundamentais
import React from 'react'
import ReactDOM from 'react-dom'

// Import de Containers
import App from './App.js'

// Import de Components

// Imports de CSS
import './index.css'

// Renderização de componentes na tela
// Formas de escrever os compnenetes: 1. <Teste1 /> ; 2. <Teste1></Teste1>
// Podemos compiar um mesmo elemento, como por exemplo o Teste2, e atribuir a ele valores de parâmetros diferentes
ReactDOM.render(
    <App />,
    document.getElementById('root')
)