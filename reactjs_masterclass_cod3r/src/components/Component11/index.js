// COMPONENT COM CLASSE COM ESTADO

import React, {Component} from 'react'

export default class Contador extends Component{
    state = {
            step:this.props.step || 1,
            num:this.props.value || 0
    }
    incrementar = () => {
        this.setState({
            num: this.state.num + this.state.step
        })
    }
    decrementar = () => {
        this.setState({
            num: this.state.num - this.state.step
        })
    }
    render(){
        return(
            <div>
                <h3>Contador</h3>
                <p>Valor: {this.state.num}</p>
                <p>Passo: {this.state.step}</p>
                <input type='number' value={this.state.step} onChange={e => this.setState({step: +e.target.value})} />
                <div>
                    <button onClick={this.incrementar}>+</button>
                    <button onClick={this.decrementar}>-</button>
                </div>
            </div>
        )
    }
}
