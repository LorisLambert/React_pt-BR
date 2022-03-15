// ESSE ARQUIVO É RESPONSÁVEL POR CONTER TODOS OS COMPONENTES E CONTAINERS QUE SERÃO RENDERIZADOS

// Import Fundamental
import React from 'react'

// Imports de CSS
import './containers/Card/Card.css' // Lembrando que o importe de css não precisa ter o "from"
import './App.css' // Lembrando que o importe de css não precisa ter o "from"

// Import de containers - OBS.: é recomendado usar o mesmo nome da pasta para o arquivo ".js" para encurtar o caminho dos imports
import Card from './containers/Card/Card'

// Imports de Components - OBS.: é recomendado usar o mesmo nome da index para o arquivo ".js" para encurtar o caminho dos imports
import Component0 from './components/Component0'
import Component1 from './components/Component1'
import Component2 from './components/Component2'
import Component3 from './components/Component3'
import Component4 from './components/Component4'
import Component5 from './components/Component5'
import Component6 from './components/Component6'
import Pai from './components/Component7/Pai'               // A partir daqui, em alguns casos, eu não estou mais encurtando caminho do import usando a estratégia do index.js
import Professor from './components/Component8/Professor'   // Isso porque estou usando mais de um component (se comunicando) pra fazer um component
import Estado from './components/Component9/Estado'         // Sempre bom lembrar que um component pode conter outros components dentro de si
import Component10 from './components/Component10'
import Component11 from './components/Component11'

export default props =>
    <div>
        <div className = 'Titulo'>
            <Component0 />
        </div>
        <div className = 'Paragrafo'>
            <Component1 Texto='Este resumo não tem como objetivo trabalhar com CSS! ' />
            <Component1 Texto='Os pré-requisitos são: html, css e javascript.' />
        </div>
        <div className='Cards'> {/* Lembrar que no JSX não usamos class, usamos className! */}
            <Card tipo='#01 - Component com um parâmetro'>
                <Component1 Texto='Jamais deixe de estudar o que você quer, jamais duvide de si mesma(o)!'/>
            </Card>
            <Card tipo='#02 - Component com dois parâmetros'>
                <Component2 Autor='Raul Seixas' Frase = 'Prefiro ser uma mertamorfose ambulante, do que ter aquela velha opinião formada sobre tudo.'/>
            </Card>
            <Card tipo='#03 - Component com parâmetro e filho'>
                <Component3 Titulo='Coma muitas frutas!'>
                    <ul>
                        <li>Abacaxi</li>
                        <li>Banana</li>
                        <li>Caju</li>
                        <li>Damasco</li>           
                    </ul>
                </Component3>
            </Card>
        </div>
        <div className='Cards'>
            <Card tipo='#04 - Component com elementos rendenrizados a partir de listas de dados'>
                <Component4 />
            </Card>
            <Card tipo='#05 - Component de condição com operador ternário'>
                <Component5 valor='24'/>
            </Card>
            <Card tipo='#06 - Component de condição com if'>
                <Component6 valor='25'/>
            </Card>
        </div>
        <div className = 'Paragrafo'>
            <Component1 Texto='Aqui temos alguns cards coloridos que demonstram o uso de estilos em components.' />
        </div>
        <div className='Cards'>
            <Card tipo='#07 - Component com comunicação direta de pai pra filho' color='#A7226E'>
                <Pai Sobrenome='Kakashi'/>
            </Card>
            <Card tipo='#08 - Component com comunicação indireta sem estado' color='#7bc043'>
                <Professor />
            </Card>
            <Card tipo='#09 - Component com comunicação indireta, Hooks e estado' color='#F26B38'>
                <Estado />
            </Card>
        </div>
        <div className='Cards'>
            <Card tipo='#10 - Component de input com Hooks' color='#F7DB4F'>
                <Component10 />
            </Card>
            <Card tipo='#11 - Component com classe e estado' color='#EC2049'>
                <Component11 step='10' value='9' />
            </Card>
            <Card tipo='#12 - Component' color='#009688'>
                
            </Card>
        </div>
        <div className = 'Paragrafo'>
            <Component1 Texto='Trabalhando com redux!' />
        </div>
        <div className='Cards'>
            <Card tipo='#13 - Component'>
                
            </Card>
            <Card tipo='#14 - Component'>
                
            </Card>
            <Card tipo='#15 - Component'>
                
            </Card>
        </div>
    </div>