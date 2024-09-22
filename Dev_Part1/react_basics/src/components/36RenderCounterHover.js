import React, { Component } from 'react'

export class RenderCounterHover extends Component {
    
  render() {
    const {count,incrementCount} = this.props
    return (
      <h2 onMouseOver={incrementCount}> Hovered {count} times</h2>
    )
  }
}

export default RenderCounterHover;