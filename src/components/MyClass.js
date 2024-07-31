import React, { Component } from 'react'

export default class MyClass extends Component {
  constructor(props){
    super(props);
    this.state ={
        mytext: ""
    }
  }   


  
  render() {


    return (
      <div>
        <input name="mytext" value={this.state.mytext} onChange={(e)=>this.setState({mytext: e.target.value})} />

        <h3>{this.state.mytext}</h3>
      </div>
    )
  }
}
