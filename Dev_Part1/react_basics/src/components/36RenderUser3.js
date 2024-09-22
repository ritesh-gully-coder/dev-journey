import React, { Component } from 'react'

class RenderUser3 extends Component {
  render() {
    return (
      <div>
        {/* <h1>Ritesh</h1> */}
        {/* {this.props.name(false)} */}
        {this.props.render(true)}
      </div>
    )
  }
}

export default RenderUser3;

//The term "render prop" refers to a technique for sharing code between React components,
//using a prop whose value is a function.


