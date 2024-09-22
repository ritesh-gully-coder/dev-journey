import React, { Component } from 'react'
import updatedComponent from './35HOC_WithCounter'
class HOC_WithCopunterClickCounter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    incrementHandler =()=>{
        this.setState(prevState=>{
            return{
                count:prevState.count + 1
            }
        })
    }
    render() {
        const {count} = this.state
        return (
            <div>
                <button onClick={this.incrementHandler}>{this.props.name} Cliked {count} times</button>
            </div>
        )
    }
}

export default updatedComponent(HOC_WithCopunterClickCounter);