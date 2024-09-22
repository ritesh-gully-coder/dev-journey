import React, { Component } from 'react'

class RenderUser2 extends Component {
  render() {
    return (
      <div>
        {/* <h1>Ritesh</h1> */}
        {/* {this.props.name(false)} */}
        {this.props.name(true)}
      </div>
    )
  }
}

export default RenderUser2;