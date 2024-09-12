//what do you want to do here ?
//we are trying to do as click on button so change trhe message of component state

import React, { Component } from 'react'

class BindingEventHandlerApproach1 extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message:'Hello'
    }
  }

  clickHandler(){
    this.setState({
      message:'Approach 1'
    })
    console.log("this",this);
  }
  render() {
    return (
      <>
      <div>{this.state.message}</div>
    
      {/* approach 1 binding in the rrender method  */}
       <button onClick={this.clickHandler.bind(this)}>Click</button> 
      </>
    )
  }
}

export default BindingEventHandlerApproach1


