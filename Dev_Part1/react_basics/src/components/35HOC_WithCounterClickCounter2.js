import React, { Component } from 'react'
import HOC_WithCounter2 from './35HOC_WithCounter2'
class HOC_WithCopunterClickCounter2 extends Component {
    

    render() {

     const {name,count,incrementCounter} = this.props;
        return (
            <div>
                <button onClick={incrementCounter}>{name} is cliked {count} times</button>
            </div>
        )
    }
}

export default HOC_WithCounter2(HOC_WithCopunterClickCounter2,10);