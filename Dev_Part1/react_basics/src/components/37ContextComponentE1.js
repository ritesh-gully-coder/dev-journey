import React, { Component } from 'react'
import ContextComponentF1 from './37ContextComponentF1';
import UserContext from './37UserContext1';

export class ContextComponentE1 extends Component {
  static contextType = UserContext
  render() {
    return (
      <div>
        Component E context {this.context}
        <ContextComponentF1/>
        </div>
    )
  }
}

ContextComponentE1.contextType = UserContext
export default ContextComponentE1;