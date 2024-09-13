//if/else approach
//if/else condition dont work inside jsx

import React, { Component } from 'react';

class ConditionalRenderingApproach1 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: false
      // isLoggedIn: true
    };
  }
  render() {
    if (this.state.isLoggedIn) {
      return (
        <>
          <div> Welcome Ritesh</div>
        </>
      );
    } else {
      return (
        <>
          <div> Welcome Guest</div>
        </>
      );
    }
  }
}

export default ConditionalRenderingApproach1;
