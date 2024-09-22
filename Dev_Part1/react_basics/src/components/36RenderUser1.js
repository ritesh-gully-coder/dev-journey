import React, { Component } from 'react'

class RenderUser1 extends Component {
  render() {
    return (
      <div>
        {/* <h1>Ritesh</h1> */}
        {this.props.name()}
      </div>
    )
  }
}

export default RenderUser1;