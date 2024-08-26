import React, { Component } from 'react';

class Message extends Component {
    constructor() {
        super()
        this.state = {
            message: 'Welcome learner'
        }
    } 
    changeMessage(){
        this.setState({
            message:'Thank you for learning with me'
        })
    }
    render() {
        return (
            <div>
                <h1>
                    {this.state.message}
                </h1>
                <button onClick={()=>this.changeMessage()}>Learn</button>
            </div>

        )

    }
}
export default Message;