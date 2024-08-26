import React, { Component } from 'react'

export class BindingEventHandler extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message:'Hello'
    }
  }
  render() {
    return (
      <>
      <div>{this.state.message}</div>
      <button>Click</button>
      </>
    )
  }
}

export default BindingEventHandler