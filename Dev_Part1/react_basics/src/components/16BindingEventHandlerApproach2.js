//what do you want to do here ?
//we are trying to do as click on button so change trhe message of component state

import React, { Component } from 'react'

class BindingEventHandlerApproach2 extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      message:'Hello'
    }
   
  }

  clickHandler(){
    this.setState({
      message:'Approach 2'
    })
    console.log("this",this);
  }
  render() {
    return (
      <>
      <div>{this.state.message}</div>
     
      {/* approach 2 arrow function in render method*/}
      <button onClick={()=>this.clickHandler()}>Click</button>

     
      </>
    )
  }
}

export default BindingEventHandlerApproach2


