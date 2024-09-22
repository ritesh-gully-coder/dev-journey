import React, { Component } from 'react'
import HOC_WithCounter1 from './35HOC_WithCounter1'

class HOC_WithCounterHoverCounter extends Component {
    
    render() {
        const {name,count,incrementCounter} = this.props;
        return (
            <div>
               <h2 onMouseOver={incrementCounter}> {name} is hovered {count} times</h2>
            </div>
        )
    }
}

export default HOC_WithCounter1(HOC_WithCounterHoverCounter);