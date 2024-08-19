import React,{ Component } from 'react';

class Greet  extends Component {
    render(){
        const {name,title} = this.props
        const {state1,state2} = this.props//destructuring state syntax

        return <h1>Welcome, {name} {title}</h1>
        
    }
}
export default Greet;