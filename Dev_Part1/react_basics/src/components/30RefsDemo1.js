//by usimg refs we can fetch the input value

import React, { Component } from 'react'

class RefsDemo1 extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
    //this is one way to create an access refs that is using createRef method
  }
  componentDidMount() {
    this.inputRef.current.focus()
    console.log(this.inputRef);
  }
  clickHandler = () => {
    alert(this.inputRef.current.value)
    //basically we are accessing value property of input DOM node which is available as current property
  }
  render() {
    return (
      <div>
        <h2> Refs Demo</h2>
        <input type='text' ref={this.inputRef} />
        <button onClick={this.clickHandler}>Fetch Value</button>
      </div>
    )
  }
}

export default RefsDemo1;



