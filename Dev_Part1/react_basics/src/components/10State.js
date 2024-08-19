//Props Vs State

//Props:->
//Props get passed to the component.
//Functional parameters.
//props are immutable.
//props-functional components.
//this.props-class components.


//state:->
//state is managed within the component.
//Vartiables declared in the function body.
//state csn be changed.
//useState Hook - functional components.
//this.state - class components.


//For Example:
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