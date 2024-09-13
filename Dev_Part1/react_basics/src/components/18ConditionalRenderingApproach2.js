//Element Variables approach


import React, { Component } from 'react';

class ConditionalRenderingApproach2 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // isLoggedIn: false
      isLoggedIn: true
    };
  }
  render() {
    let message;
    if (this.state.isLoggedIn) {
      message = <div>Welcome Ritesh </div>
    } else {
      message = <div>Welcome Guest </div>
    }

    return (
      <div>{message}</div>
    )
  }
}

export default ConditionalRenderingApproach2;
