import React, { Component } from 'react'
import MethodAsPropsChild from './17MethodAsPropsChild';

class MethodAsPropsParent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName:'Parent'
      }
      this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName){
        // alert('Hello' + this.state.parentName)//normal call
       // alert(`Hello ${this.state.parentName}`)//Es6 calling
        alert(`Hello ${this.state.parentName} from ${childName}`)//getting parameter
    }
    
  render() {
    return (
      <div>
        <MethodAsPropsChild greetHandler={this.greetParent}/>
      </div>
    )
  }
}

export default MethodAsPropsParent;