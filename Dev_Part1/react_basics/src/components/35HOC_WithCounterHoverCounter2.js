import React, { Component } from 'react'
import HOC_WithCounter2 from './35HOC_WithCounter2'

class HOC_WithCounterHoverCounter2 extends Component {
    
    render() {
        const {name,count,incrementCounter} = this.props;
        return (
            <div>
               <h2 onMouseOver={incrementCounter}> {name} is hovered {count} times</h2>
            </div>
        )
    }
}

export default HOC_WithCounter2(HOC_WithCounterHoverCounter2,20);