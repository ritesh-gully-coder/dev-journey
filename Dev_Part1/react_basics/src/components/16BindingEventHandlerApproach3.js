//what do you want to do here ?
//we are trying to do as click on button so change trhe message of component state

import React, { Component } from 'react'

class BindingEventHandlerApproach3 extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      message:'Hello'
    }
    this.clickHandler= this.clickHandler.bind(this)//it will be indluded here for approach 3
  }

  clickHandler(){
    this.setState({
      message:'Approach 3'
    })
    console.log("this",this);
  }
  render() {
    return (
      <>
      <div>{this.state.message}</div>
       {/* approach 3 arrow function in render method*/}
      <button onClick={this.clickHandler}>Click</button>
      </>
    )
  }
}

export default BindingEventHandlerApproach3



