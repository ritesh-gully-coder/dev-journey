//Short Circuit Operator Approach
//this is just specific case of ternary operator approach
//if logged in then Welcome Ritesh if not logged in then i want nothing to rneder


import React, { Component } from 'react';

class ConditionalRenderingApproach4 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // isLoggedIn: true
      isLoggedIn: false
    };
  }
  render() {
    return (
      this.state.isLoggedIn && <div> Welcome Ritesh</div>
    );

  }
}

export default ConditionalRenderingApproach4;
