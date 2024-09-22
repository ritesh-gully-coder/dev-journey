import React, { Component } from 'react'

export class RenderCounterClick extends Component {
   
  render() {
    const {count,incrementCount} = this.props
    return (
    <button onClick={incrementCount}>Clicked {count} times</button>
    )
  }
}

export default RenderCounterClick;