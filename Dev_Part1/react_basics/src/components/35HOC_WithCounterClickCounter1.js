import React, { Component } from 'react'
import HOC_WithCounter1 from './35HOC_WithCounter1'
class HOC_WithCopunterClickCounter1 extends Component {
    

    render() {

     const {name,count,incrementCounter} = this.props;
        return (
            <div>
                <button onClick={incrementCounter}>{name} is cliked {count} times</button>
            </div>
        )
    }
}

export default HOC_WithCounter1(HOC_WithCopunterClickCounter1);