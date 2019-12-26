import React, { PureComponent } from 'react';
import CounterTemplate from './templates/CounterTemplate';
/* 
A classe precisa ter um estado inicial
Para atualizar o estado usar sempre ações
*/

class CounterClass extends PureComponent {
    state = {
      counter: 0
    }
  
    render() {
      return (
        <CounterTemplate 
          counter={this.state.counter}
          increment={() => {
            this.setState({ counter: this.state.counter + 1 })
          }}
          decrement={() => {
            this.setState({ counter: this.state.counter - 1 })
          }} />
      )
    }
  }

  export default CounterClass;