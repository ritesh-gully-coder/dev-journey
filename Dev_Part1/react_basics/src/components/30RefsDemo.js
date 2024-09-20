import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
      super(props)
      this.inputRef=React.createRef()
    }
    componentDidMount(){
        this.inputRef.current.focus()
        console.log(this.inputRef);
    }
  render() {
    return (
      <div>
      <h2> Refs Demo</h2>
      <input type='text' ref={this.inputRef}/>
        </div>
    )
  }
}

export default RefsDemo;


//in console we have object where current : input;wherecurrent property ppints to actual DOM.
//by current.focus we have focused to type on input

