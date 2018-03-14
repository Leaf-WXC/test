import ReactDOM from 'react-dom';
import React, { Component } from 'react';
class Greeting extends Component {
  state={
    who:'world'
  }

  switchName=()=>{
    if (this.state.who==='world')
      this.setState((prevState,props)=>({who:'react'}))
    else
      this.setState((prevState,props)=>({who:'world'}))
  }

  render() {
    return (
      <div>  
          <h1>{`hello ${this.state.who}`}</h1> 
          <button onClick={this.switchName}> {this.state.who==='world'?'react':'world'}</button>
      </div>
    );
  }
} 

      const App=(props,context)=>{
        return (
          <div>
            <Greeting who={'world'} />
            <Greeting who={'react'} />
          </div>
        )
      }    
ReactDOM.render(<App />, document.getElementById('root'));