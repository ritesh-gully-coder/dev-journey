//Ternary Conditional operator approach


import React, { Component } from 'react';

class ConditionalRenderingApproach3 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      //  isLoggedIn:true
      isLoggedIn: false
    };
  }
  render() {
    return (
      this.state.isLoggedIn ?
        (
          <div> Welcome Ritesh</div>
        ) : (
          <div>Welcome Guest</div>
        )
    );

  }
}

export default ConditionalRenderingApproach3;
