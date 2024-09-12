//what do you want to do here ?
//we are trying to do as click on button so change trhe message of component state

import React, { Component } from 'react'

class BindingEventHandlerApproach4 extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      message:'Hello'
    }
  }

 clickHandler = () =>{
  this.setState({
    message:'Approach 4'
  })
 }
  render() {
    return (
      <>
      <div>{this.state.message}</div>
      
       {/* approach 4 use an arrow function as class property*/}
      <button onClick={this.clickHandler}>Click</button>

      </>
    )
  }
}

export default BindingEventHandlerApproach4


//React documents suggest Approach 3 and Approach 4

