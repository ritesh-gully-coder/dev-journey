import React, { Component } from 'react'
import RefsWithClassComponent from './31RefsWithClassComponent';

class RefsWithClassComponentParent extends Component {
    constructor(props) {
      super(props)
    
      this.componentRef= React.createRef()

    }
    clickHandler = ()=>{
      this.componentRef.current.focusInput()
    }
   
  render() {
    return (
      <div>
     < RefsWithClassComponent ref={this.componentRef}/>
     <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default RefsWithClassComponentParent;

//when i click on Foces Input then in input focus visible
//Refs can not be attach to functional component keep in mind

