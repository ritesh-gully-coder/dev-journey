import React, { Component } from 'react'

class RenderUser extends Component {
  render() {
    return (
      <div>
        {/* <h1>Ritesh</h1> */}
        {this.props.name}
      </div>
    )
  }
}

export default RenderUser;