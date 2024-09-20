//It is also possible to add Refs to a class component

import React, { Component } from 'react'

class RefsWithClassComponent extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef= React.createRef()

    }
  
    focusInput(){
        this.inputRef.current.focus()
    }
  render() {
    return (
      <div>
       <input type="text"  ref={this.inputRef}/>
      </div>
    )
  }
}

export default RefsWithClassComponent;
