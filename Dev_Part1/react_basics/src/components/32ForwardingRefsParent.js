//Ref forwarding is a technique autoamtically passing a ref through a component to one of its children

import React, { Component } from 'react'
import ForwardingRefs from './32ForwardingRefs'

class ForwardingRefsParent extends Component {
  constructor(props) {
    super(props)
  
    this.inputRef = React.createRef()
  }

  clickHandler =()=>{
    this.inputRef.current.focus()

  }
  render() {
    return (
      <div>
        <h1>Forwarding Refs Parent </h1>
        <ForwardingRefs ref={this.inputRef}/>
        <button onClick={this.clickHandler}>Focus Input</button>
        
        </div>
    )
  }
}

export default ForwardingRefsParent