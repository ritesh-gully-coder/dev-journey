import React, { Component } from 'react'
import updatedComponent from './35HOC_WithCounter'

class HOC_WithCounterHoverCounter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    incrementCounter =()=>{
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
               <h2 onMouseOver={this.incrementCounter}>{this.props.name} Hovere {count} times</h2>
            </div>
        )
    }
}

export default updatedComponent(HOC_WithCounterHoverCounter);