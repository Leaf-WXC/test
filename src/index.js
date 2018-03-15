import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Greeting extends Component {


  state={
    who:this.props.defaultWho?this.props.defaultWho:''
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

class GreetingInput extends Component {


  constructor(props,context) {
    super(props,context); 

    this.state = {
      who:this.props.defaultWho?this.props.defaultWho:''
    };



    this.handleChange = this.handleChange.bind(this);
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {

  
    console.log('this指针是:',this)
    this.setState({who: event.target.value});
  }

  handleSubmit(event) {
    alert('如果您按回车，或者点击提交按钮，则窗体会执行提交事件，现在状态中who的值是: ' + this.state.who);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <h1>{`hello ${this.state.who}`}</h1> 
      <label>
        Who:
        <input type="text" value={this.state.who} onChange={this.handleChange} />
      </label>
      <input type="submit" value="窗体提交按钮，可点击也可按回车，会触发form的onSubmit事件" />
    </form>
    );
  }
}

const App=(props,context)=>{
 
  return (
    <div>
      <Greeting defaultWho={props.defaultWho} />
      <GreetingInput defaultWho={props.defaultWho}/>
    </div>
  )
}

ReactDOM.render(<App defaultWho={'world'}/>, document.getElementById('root'));

