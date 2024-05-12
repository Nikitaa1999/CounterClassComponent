import React, {Component} from 'react';

class App extends Component{
  constructor(){
    super();
    this.state={
      count:0
    };
  }

  handleIncrement=()=>{
    this.setState(prevState=>({
      count: prevState.count + 1
    }));
  }

  handleDecrement=()=>{
    this.setState(prevState=>({
      count: prevState.count - 1
    }));
  }

  render(){
    return(
      <div>
        <div><h1>Counter App</h1></div>

<div><p>Count: {this.state.count}</p></div>
<div>
  <button onClick={this.handleIncrement}>Increment</button>
  <button onClick={this.handleDecrement}>Decrement</button>
</div>

      </div>
    )
  }
}


export default App;
